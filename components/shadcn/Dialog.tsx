import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import styles from "@/styles/Navbars.module.css";
import Link from "next/link";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { PiChalkboardTeacherFill, PiStudentBold } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <IoEllipsisHorizontal />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Student Management System </DialogTitle>
          <DialogDescription>
            Are you a teacher, admin, or student? Please select your role to proceed.
          </DialogDescription>
        </DialogHeader>
        <div className={styles.main}>
          <Link href="/login">
            <PiChalkboardTeacherFill />
            Teacher
          </Link>
          <Link href="/login">
            <RiAdminFill /> Admin
          </Link>
          <Link href="/login">
            <PiStudentBold /> Student
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
