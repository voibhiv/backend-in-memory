export class DB<T extends Record<string, any>> {
  private records: T[];

  constructor(records: T[]) {
    this.records = records;
  }

  private generateId(): number {
    const maxId = this.records.reduce((max, record) => {
      const recordId = parseInt(record.id as unknown as string, 10);
      return recordId > max ? recordId : max;
    }, 0);
    return maxId + 1;
  }

  public insert(data: Omit<T, "id">): T {
    const newRecord = { id: this.generateId(), ...data };
    this.records.push(newRecord as unknown as T);
    return newRecord as unknown as T;
  }

  public updateById(id: number, data: Partial<T>): T | null {
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
