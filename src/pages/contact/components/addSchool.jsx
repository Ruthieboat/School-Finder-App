import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddSchool = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#D87357] bg-cover h-full flex justify-evenly p-12">
            <div className="w-[400px] h-1/4 object-cover">
                <h1
                    style={{ fontFamily: "Monaco" }}
                    className="text-white text-4xl font-bold pb-6 leading-snug"
                >
                    Get everyone talking about your school
                </h1>

            </div>
            <div className="bg-white h-100vh w-96 rounded-[10px] shadow-2xl shadow-lime-50 object-cover">
                <div className="w-80 ml-8">
                    <h1
                        style={{ fontFamily: "Monaco,serif" }}
                        className="font-bold text-3xl text-center p-4 text-[#65359c] "
                    >
                        Get known today
                    </h1>

                    <form className="flex flex-col max-w-md mx-auto pt-5">
                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            ></label>
                            <input
                                type="text"
                                placeholder="Firstname"
                                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
                            />
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            ></label>
                            <input
                                type="text"
                                placeholder="Lastname"
                                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
                            />
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            ></label>
                            <input
                                type="text"
                                placeholder="Name of School"
                                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
                            />
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            ></label>
                            <input
                                type="text"
                                placeholder="Work Email"
                                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
                            />
                        </div>
                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            ></label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg "
                            />
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            ></label>
                            <input
                                type="textarea"
                                name="message"
                                rows={10}
                                cols={30}
                                placeholder="Write a brief description of your school"
                                className="h-10 w-full px-2 py-1 outline-transparent border-[#a799b7] border-2 rounded-lg"
                            />
                        </div>

                        <div className="mb-8">
                            <label
                                style={{ fontFamily: "Times New Roman,serif" }}
                                htmlFor="name"
                                className="block text-black font-medium mb-1 ml-4"
                            >
                                INSERT PICTURES OF YOUR SCHOOL
                            </label>
                            <input
                                type="file"
                                className="h-10 w-full px-2 py-1  outline-transparent border-[#a799b7] border-2 rounded-lg"
                            />
                        </div>

                        <div className="mb-8 ml-24">
                            <button
                                onClick={() => navigate("/present")}
                                style={{ fontFamily: "Times New Roman,serif" }}
                                type="submit"
                                className="h-10 w-40 px-3 py-2 outline-transparent border-[#a799b7] border-2 rounded-3xl hover:bg-[#a799b7]"
                            >
                                Add School
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSchool