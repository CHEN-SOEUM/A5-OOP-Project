abstract class Person {
    protected name: string;
    protected gender: Gender;
    protected date_of_birth: Date;

    constructor(name: string, gender: Gender, date_of_birth: Date) {
        this.name = name;
        this.gender = gender;
        this.date_of_birth = date_of_birth;
    }

    // private getName(): string{};
    // private getGender(): string{};
    // private getDateOfBirth(): Date{};
}