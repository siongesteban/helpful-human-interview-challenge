export const logStart = (tableName: string): void => {
  console.log(`Seeding ${tableName}...`);
};

export const logEnd = (tableName: string): void => {
  console.log(`Done seeding ${tableName}.\n`);
};
