

import {HiOutlineMail} from "react-icons/hi"
import  {AiOutlinePhone} from "react-icons/ai";

import Image from "next/image";
export const AboutMe = () => {
    const people = [
        {
          name: 'Deepak Kumar',
          title: 'Data Scientist | React Developer',
          role: 'Data Scientist ',
          email: 'erdeep64930@.com',
          telephone: '+91-9939183692',
          imageUrl:"/dpk.JPG"
        },
        // More people...
      ]
  return (
    <div>
         <ul >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8 font-bai">
            <Image width={100} height={100} className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full" src={person.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium ">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-3 py-1 text-red-500 text-xs font-medium bg-green-300  rounded-full">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                  <HiOutlineMail className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <AiOutlinePhone className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
