"use client";
import { FaBars, FaSchool, FaStackExchange } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { FaEnvelope } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import styles from '@/styles/Sidebar.module.css'
import { MdDisplaySettings, MdPayments, MdSpaceDashboard, MdSubject } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-34 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <ul className={styles.sides}>
            <li className="mb-2">
              <Link href="/admin"  onClick={toggleSidebar}>
                <MdSpaceDashboard /> Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/student" onClick={toggleSidebar}>
                <PiStudentBold />
                Student
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/teacher"  onClick={toggleSidebar}>
              <FaChalkboardTeacher />
                Teacher
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/class" onClick={toggleSidebar}>
              <FaSchool />
                Class
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/attandence" onClick={toggleSidebar}>
              <MdDisplaySettings />
                Attandance
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/subject" onClick={toggleSidebar}>
              <MdSubject />
                Subject
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/examen" onClick={toggleSidebar}>
              <FaStackExchange />
                Exam
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/message" onClick={toggleSidebar}>
              <FaEnvelope />
                Message
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/payement" onClick={toggleSidebar}>
              <MdPayments />
                Transaction
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Optional Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
