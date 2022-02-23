export const FBDataToObject = (data: any) => {
  let JSONData = data;
  if (data.createdAt)
    JSONData.createdAt = data.createdAt.toDate().toISOString();
  if (data.publishedAt)
    JSONData.publishedAt = data.publishedAt.toDate().toISOString();
  if (data.updatedAt)
    JSONData.updatedAt = data.updatedAt.toDate().toISOString();
  return JSONData;
};
