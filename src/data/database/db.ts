export class DB<T extends Record<string, any>> {
  private records: T[];

  constructor(records: T[]) {
    this.records = records;
  }

  public insert(data: T) {
    this.records.push(data);
  }

  public updateById(id: string, data: Partial<T>): T | null {
    const index = this.records.findIndex((record) => record.id === id);

    if (index !== -1) {
      this.records[index] = { ...this.records[index], ...data };
      return this.records[index];
    }

    return null;
  }

  public deleteById(id: string): boolean {
    const index = this.records.findIndex((record) => record.id === id);

    if (index !== -1) {
      this.records.splice(index, 1);
      return true;
    }

    return false;
  }

  public find(query: Partial<T>): T[] {
    return this.records.filter((record) => {
      return Object.entries(query).every(([key, value]) => {
        return record[key as keyof T] === value;
      });
    });
  }

  public findAll(): T[] {
    return this.records;
  }
}
