import { db } from "./firebase";
import {
  getDoc,
  doc,
  collection,
  query,
  getDocs,
  limit,
  where,
  orderBy,
  startAfter,
  Timestamp,
} from "firebase/firestore";
import { FBDataToObject } from "./index";

export const getUpdates = async () => {
  const snapshotPosts = await getDocs(
    query(collection(db, "post"), limit(3), orderBy("publishedAt", "desc"))
  );

  const snapshotActivity = await getDocs(
    query(collection(db, "activity"), limit(3), orderBy("publishedAt", "desc"))
  );

  let data: any[] = [];
  snapshotPosts.forEach((post) =>
    data.push(FBDataToObject({ ...post.data(), id: post.id, type: "bai-viet" }))
  );
  snapshotActivity.forEach((activity) =>
    data.push(
      FBDataToObject({ ...activity.data(), id: activity.id, type: "hoat-dong" })
    )
  );
  data.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) return 1;
    if (a.publishedAt > b.publishedAt) return -1;
    return 0;
  });

  return data.slice(0, 3);
};

export const getParticipants = async () => {
  const snapshot = await getDocs(
    query(collection(db, "participant"), orderBy("createdAt", "desc"))
  );

  let data: any = [];
  snapshot.forEach((doc) => {
    data.push(FBDataToObject({ ...doc.data(), id: doc.id }));
  });
  return data;
};

export const getPost = async (titleKebabCase?: string) => {
  const snapshot = await getDocs(
    query(
      collection(db, "post"),
      where("titleKebabCase", "==", titleKebabCase),
      orderBy("createdAt", "desc"),
      limit(1)
    )
  );

  if (snapshot.docs.length === 0) return null;
  return FBDataToObject({
    ...snapshot.docs[0].data(),
    id: snapshot.docs[0].id,
  });
};

export const getActivity = async (titleKebabCase?: string) => {
  const snapshot = await getDocs(
    query(
      collection(db, "activity"),
      where("titleKebabCase", "==", titleKebabCase),
      orderBy("createdAt", "desc"),
      limit(1)
    )
  );

  if (snapshot.docs.length === 0) return null;
  return FBDataToObject({
    ...snapshot.docs[0].data(),
    id: snapshot.docs[0].id,
  });
};

export const getFeaturedActivities = async () => {
  const snapshot = await getDocs(
    query(
      collection(db, "activity"),
      where("isFeatured", "==", true),
      orderBy("createdAt", "desc"),
      limit(15)
    )
  );
  let data: any = [];
  snapshot.forEach((doc) => {
    if (doc.data().status === "PUBLISHED")
      data.push(FBDataToObject({ ...doc.data(), id: doc.id }));
  });
  return data.slice(0, 3);
};

export const getActivities = async () => {
  const snapshot = await getDocs(
    query(
      collection(db, "activity"),
      where("status", "==", "PUBLISHED"),
      orderBy("createdAt", "desc"),
      limit(8)
    )
  );
  let data: any = [];
  snapshot.forEach((doc) => {
    data.push(FBDataToObject({ ...doc.data(), id: doc.id }));
  });
  return data;
};

export const getPosts = async (RTimestamp?: string) => {
  const CRTimestamp = RTimestamp
    ? Timestamp.fromDate(new Date(RTimestamp))
    : Timestamp.fromDate(new Date());
  const snapshot = await getDocs(
    query(
      collection(db, "post"),
      where("status", "==", "PUBLISHED"),
      orderBy("createdAt", "desc"),
      startAfter(CRTimestamp),
      limit(8)
    )
  );
  let data: any = [];
  snapshot.forEach((doc) => {
    data.push(FBDataToObject({ ...doc.data(), id: doc.id }));
  });
  return data;
};
