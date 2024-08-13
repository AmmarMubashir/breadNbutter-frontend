import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useGetQuarter1, useUpdateQuarter1 } from "../../api/MyQuarter1Api";
import { toast } from "react-toastify";

const UpdateQuarter1Info = () => {
  const { Quarter1Info } = useGetQuarter1();
  const [quarter1, setQuarter1] = useState();
  const { isSuccess, error, UpdateQuarter1 } = useUpdateQuarter1();
  useEffect(() => {
    const loadData = async () => {
      const data = await Quarter1Info();
      if (data) {
        setQuarter1(data[0]);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Quarter1 updated successfully");
    }
    if (error) {
      toast.error(error.toString());
    }
  }, [isSuccess, error]);

  if (quarter1) {
    console.log(quarter1);
  }

  const handleInputChange = (event, optionNumber, property) => {
    // Accepts three arguments: event, option number, and property
    const newQuarter1 = { ...quarter1 }; // Create a copy of the state

    console.log(optionNumber, property, event.target.value);
    // Update the appropriate option's property based on arguments
    newQuarter1[`option${optionNumber}`][property] = Number(event.target.value);

    setQuarter1(newQuarter1); // Update the state with the modified object
  };

  const handleDescriptionChange = (event, optionNumber) => {
    // Accepts three arguments: event, option number, and property
    const newQuarter1 = { ...quarter1 }; // Create a copy of the state

    // console.log(optionNumber, property, event.target.value);
    // Update the appropriate option's property based on arguments
    newQuarter1[`option${optionNumber}`]["description"] = event.target.value;

    setQuarter1(newQuarter1); // Update the state with the modified object
  };

  const handleEventChange = (event) => {
    // Accepts three arguments: event, option number, and property
    const newQuarter1 = { ...quarter1 }; // Create a copy of the state

    // console.log(optionNumber, property, event.target.value);
    // Update the appropriate option's property based on arguments
    newQuarter1["event"] = event.target.value;

    setQuarter1(newQuarter1); // Update the state with the modified object
  };

  const handleDataChange = (event, key) => {
    const newQuarter1 = { ...quarter1 }; // Create a copy of the state
    newQuarter1[key] = event.target.value;
    setQuarter1(newQuarter1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateQuarter1(quarter1);
  };

  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#80808075] md:py-4 py-[3rem]">
          <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
            Update Quarter 1
          </h1>
          <div className="mx-auto mt-4 w-[95%] md:w-[85%] bg-white px-4 py-2 rounded text-start">
            {quarter1 && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold text-1.4rem">Option 1:</h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <label htmlFor="opt1Desc">Description:</label>
                      <textarea
                        id="opt1Desc"
                        value={quarter1 && quarter1.option1.description}
                        onChange={(event) => handleDescriptionChange(event, 1)}
                        className="bg-[#80808060] px-3 py-2  rounded resize-none w-[100%] text-[#000000] outline-none"
                      ></textarea>
                    </div>
                    <div className=" flex gap-6">
                      <div className="flex flex-col flex-1 items-start gap-2 ">
                        <label htmlFor="opt1Cost" className="w-max">
                          Cost:
                        </label>
                        <input
                          type="number"
                          id="opt1Cost"
                          value={quarter1.option1.cost}
                          onChange={(event) =>
                            handleInputChange(event, 1, "cost")
                          }
                          className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt1OtherCost" className="w-max">
                          Other Cost:
                        </label>
                        <input
                          type="number"
                          id="opt1OtherCost"
                          value={quarter1.option1.otherCost}
                          onChange={(event) =>
                            handleInputChange(event, 1, "otherCost")
                          }
                          className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt1Income" className="w-max">
                          Income:
                        </label>
                        <input
                          type="number"
                          id="opt1Income"
                          value={quarter1.option1.income}
                          onChange={(event) =>
                            handleInputChange(event, 1, "income")
                          }
                          className="bg-[#80808060] px-3 py-2 w-[100%] rounded text-[#000000] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Option 2 */}
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold text-1.4rem mt-4">Option 2:</h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <label htmlFor="opt2Desc">Description:</label>
                      <textarea
                        id="opt2Desc"
                        value={quarter1.option2.description}
                        onChange={(event) => handleDescriptionChange(event, 2)}
                        className="bg-[#80808060] px-3 py-2  rounded resize-none w-[100%] text-[#000000] outline-none"
                      ></textarea>
                    </div>
                    <div className=" flex gap-6">
                      <div className="flex flex-col flex-1 items-start gap-2 ">
                        <label htmlFor="opt2Cost" className="w-max">
                          Cost:
                        </label>
                        <input
                          type="number"
                          id="opt2Cost"
                          value={quarter1.option2.cost}
                          onChange={(event) =>
                            handleInputChange(event, 2, "cost")
                          }
                          className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt2OtherCost" className="w-max">
                          Other Cost:
                        </label>
                        <input
                          type="number"
                          id="opt2OtherCost"
                          value={quarter1.option2.otherCost}
                          onChange={(event) =>
                            handleInputChange(event, 2, "otherCost")
                          }
                          className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt2Income" className="w-max">
                          Income:
                        </label>
                        <input
                          type="number"
                          id="opt2Income"
                          value={quarter1.option2.income}
                          onChange={(event) =>
                            handleInputChange(event, 2, "income")
                          }
                          className="bg-[#80808060] px-3 py-2 w-[100%] rounded text-[#000000] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-4">
                  <h1 className="font-bold text-1.4rem">Option 3:</h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <label htmlFor="opt3Desc">Description:</label>
                      <textarea
                        id="opt3Desc"
                        value={quarter1 && quarter1.option3.description}
                        onChange={(event) => handleDescriptionChange(event, 3)}
                        className="bg-[#80808060] px-3 py-2  rounded resize-none w-[100%] text-[#000000] outline-none"
                      ></textarea>
                    </div>
                    <div className=" flex gap-6">
                      <div className="flex flex-col flex-1 items-start gap-2 ">
                        <label htmlFor="opt3Cost" className="w-max">
                          Cost:
                        </label>
                        <input
                          type="number"
                          id="opt3Cost"
                          value={quarter1.option3.cost}
                          onChange={(event) =>
                            handleInputChange(event, 3, "cost")
                          }
                          className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt3OtherCost" className="w-max">
                          Other Cost:
                        </label>
                        <input
                          type="number"
                          id="opt3OtherCost"
                          value={quarter1.option3.otherCost}
                          onChange={(event) =>
                            handleInputChange(event, 3, "otherCost")
                          }
                          className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt3Income" className="w-max">
                          Income:
                        </label>
                        <input
                          type="number"
                          id="opt3Income"
                          value={quarter1.option3.income}
                          onChange={(event) =>
                            handleInputChange(event, 3, "income")
                          }
                          className="bg-[#80808060] px-3 py-2 w-[100%] rounded text-[#000000] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="flex md:flex-row flex-col gap-6 mt-4">
                  <div className="flex flex-col flex-1 items-start gap-2 ">
                    <label htmlFor="clients" className=" font-bold">
                      Number of Clients per day:
                    </label>
                    <input
                      type="number"
                      id="clients"
                      value={quarter1["No of Clients per day"]}
                      onChange={(event) =>
                        handleDataChange(event, "No of Clients per day")
                      }
                      className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                    />
                  </div>
                  <div className="flex flex-col flex-1 items-start gap-2">
                    <label htmlFor="price" className="w-max font-bold">
                      Average Price:
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={quarter1["Average Price"]}
                      onChange={(event) =>
                        handleDataChange(event, "Average Price")
                      }
                      className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                    />
                  </div>
                  <div className="flex flex-col flex-1 items-start gap-2">
                    <label htmlFor="budget" className="w-max font-bold">
                      Opening balance:
                    </label>
                    <input
                      type="number"
                      id="budget"
                      value={quarter1["budget"]}
                      onChange={(event) => handleDataChange(event, "budget")}
                      className="bg-[#80808060] px-3 py-2 rounded w-[100%] text-[#000000] outline-none"
                    />
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col flex-1 items-start gap-2 mt-6">
                  <label htmlFor="event" className="font-bold">
                    Event:
                  </label>
                  <textarea
                    id="event"
                    value={quarter1.event}
                    onChange={(event) => handleEventChange(event)}
                    className="bg-[#80808060] px-3 py-2  rounded resize-none w-[100%] text-[#000000] outline-none"
                  ></textarea>
                </div>
                <button className="w-max px-4 py-2 block ml-auto bg-[#1B375F] text-white rounded mt-4">
                  Update
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuarter1Info;
