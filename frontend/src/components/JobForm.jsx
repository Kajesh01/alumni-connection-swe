import React, { useState } from "react";
import { WithContext as ReactTags } from 'react-tag-input';
import { Button, Checkbox, Label, TextInput, Select, Textarea, FileInput, Badge } from "flowbite-react";
import { useForm } from "react-hook-form";
export default function JobForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleDeleteSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (inputValue.trim() && !skills.includes(inputValue.trim())) {
            setSkills([...skills, inputValue.trim()]);
            setInputValue('');
        }
    };
    return (
        <form className=" pb-2 w-9/10 grid grid-cols-2   gap-1 m-2" onSubmit={handleSubmit((data) => {
            const formData = { ...data, skills };
            console.log(formData);
            //  work with formData 
        })}
        >

            {/* company Name */}
            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                <div className="mb-2 block ">
                    <Label htmlFor="company Name" value="Company " />
                </div>
                <TextInput id="companyName" type="text" placeholder=""
                    {...register("companyName", {
                        required: "this is required"
                    })} />
                <p>{errors.companyName?.message}</p>
            </div>

            {/* Job Title*/}
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                <div className="mb-2 block ">
                    <Label htmlFor="title" value="Job Title " />
                </div>
                <TextInput id="title" type="text" placeholder="Job title here "
                    {...register("title", {
                        required: "this is required"
                    })} />
                <p>{errors.title?.message}</p>
            </div>
            {/* Job Type*/}
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                <div className="mb-2 block ">
                    <Label htmlFor="type" value="Job type" />
                </div>
                <Select id="type" required {...register("type", {
                    required: "this is required"
                })
                }>
                    <option>Internship</option>
                    <option>FTE</option>
                </Select>
            </div>

            {/* Salary verify input type later */}
            <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                <div className="mb-2 block">
                    <Label htmlFor="salary" value="Salary" />
                </div>
                <TextInput id="salary" type="text"
                    {...register("salary", {
                        required: "this is required"
                    })
                    } />
                <p>{errors.salary?.message}</p>
            </div>
            {/* Expire Date */}
            <div className="col-start-1 col-end-2 row-start-3 row-end-4">
                <div className="mb-2 block">
                    <Label htmlFor="jobExp" value="Expire date " />
                </div>
                <TextInput id="jobExp" type="date" placeholder=""
                    {...register("jobExp", {
                        required: "this is  required",
                    })} />
                <p>{errors.jobExp?.message}</p>
            </div>


            {/* Description */}
            <div className="col-start-1 col-end-3 row-start-4 row-end-6">
                <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" />
                </div>
                <Textarea id="description" placeholder="" rows={4} {...register("description", {
                    required: "this is required",
                })} />
            </div>

            {/* yoe */}

            <div className="row-start-3 row-end-4 col-start-2 col-end-3">
                <div className="mb-2 block ">
                    <Label htmlFor="yoe" value="Year of Experience" />
                </div>
                <Select
                    id="yoe"
                    required
                    {...register("yoe", {
                        required: "this is required",
                    })}
                >
                    <option value="">Select year</option>
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                    <option value="1">8</option>
                    <option value="1">9</option>
                    <option value="1">10</option>
                    <option value="1">other</option>
                </Select>
            </div>

            {/* skills */}
            <div className="row-start-6 row-end-7 col-start-2 col-end-3">
                <div className="mb-2 block">
                    <Label value="skills" />
                </div>
                <div className="flex space-x-2 mb-2">
                    <TextInput
                        type="text"
                        placeholder="Add a skill and press enter"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddSkill(e)}
                        className="w-full"
                    />
                </div>
                <div className="flex flex-wrap gap-2  items-start">
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            size="sm"
                            className="inline-flex items-center space-x-1 bg-blue-600 text-white"
                        >
                            {skill}
                            <button
                                type="button"
                                onClick={() => handleDeleteSkill(index)}
                                className="text-white ml-2 hover:text-gray-200"
                            >
                                ×
                            </button>
                        </Badge>
                    ))}
                </div>
            </div>


            {/* applyLink */}
            <div className="col-start-1 col-end-2 row-start-6 row-end-7">
                <div className="mb-2 block">
                    <Label htmlFor="applyLink" value="Apply link" />
                </div>
                <TextInput id="applyLink" type="text"
                    {...register("applyLink", {
                        required: "this is required"
                    })
                    } />
                <p>{errors.applyLink?.message}</p>
            </div>


            <div className="col-start-1 col-end-2 row-start-8 row-end-9 mt-3">
                <Button type="submit">Post </Button>
            </div>
        </form>

    );
}


// {/* <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//     First Name
//   </label>
//   <input
//     type="text"
//     name="firstName"
//     value={formData.firstName}
//     onChange={handleChange}
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//     placeholder="Enter your first name"
//   /> */}


//    {/* Job Category */}
//    <div className="col-start-2 col-end-3 row-start-2 row-end-3">
//    <div className="mb-2 block">
//        <Label htmlFor="jobCategory" value="Job category" />
//    </div>
//    <Select id="jobType" required {...register("jobCategory", {
//            required: "this is required"
//        })
//        }>
//        <option>Technical Consultant</option>
//        <option>Software Engineer</option>
//        <option>Memeber of Technical Staff</option>
//        <option>Data Analyst</option>
//        <option>Machine Learning Engineer</option>
//    </Select>
// </div>
//  {/* job location */}
{/* <div className="col-start-1 col-end-3 row-start-4 row-end-5">
<div className="mb-2 block">
    <Label htmlFor="Job location" value="Job location" />
</div>
<TextInput id="jobLocation" type="" placeholder="Location ex: Jaipur "
    {...register("jobLocation", {
        required: "this is required",
    })} />
<p>{errors.email?.message}</p>
</div> */}


//   {/* job label */}
//   <div className="col-start-1 col-end-3 row-start-7 row-end-8">
//   <div>
//       <Label htmlFor="jobThumbnail" value="Job Thumbnail" />
//   </div>
//   <FileInput id="jobThumbnail" helperText="SVG, PNG, JPG or GIF (MAX. 10MB)." {...register("jobThumbnail", {
//           required: "this is required",
//       })}  />
// </div>