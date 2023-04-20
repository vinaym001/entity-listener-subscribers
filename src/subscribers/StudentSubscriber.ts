import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { Student } from "../entity/Student";

@EventSubscriber()
export class StudentSubscriber implements EntitySubscriberInterface<Student> {

    listenTo() {
        return Student;
    }

    beforeInsert(event: InsertEvent<Student>) {
        console.log(`[BEFORE INSERT] Student will be saved`);
    }

    afterInsert(event: InsertEvent<Student>) {
        console.log(`[SAVED] Student with id ${event.entity.id} has been saved`);
        console.log(`[AFTER INSERT] Student with id ${event.entity.id} has been saved`);
        
    }
}
