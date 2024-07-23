import React, { useEffect, useState } from "react";
import AdminNav from "../components/AdminNav";
import { useGetQuarter3, useUpdateQuarter3 } from "../../api/MyQuarter3Api";
import { toast } from "react-toastify";

const UpdateQuarter3Info = () => {
  const { Quarter3Info } = useGetQuarter3();
  const [quarter3, setQuarter3] = useState();
  const { isSuccess, error, UpdateQuarter3 } = useUpdateQuarter3();
  useEffect(() => {
    const loadData = async () => {
      const data = await Quarter3Info();
      if (data) {
        setQuarter3(data[0]);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Quarter3 updated successfully");
    }
    if (error) {
      toast.error(error.toString());
    }
  }, [isSuccess, error]);

  if (quarter3) {
    console.log(quarter3);
  }

  const handleInputChange = (event, optionNumber, property) => {
    // Accepts three arguments: event, option number, and property
    const newQuarter3 = { ...quarter3 }; // Create a copy of the state

    console.log(optionNumber, property, event.target.value);
    // Update the appropriate option's property based on arguments
    newQuarter3[`option${optionNumber}`][property] = Number(event.target.value);

    setQuarter3(newQuarter3); // Update the state with the modified object
  };

  const handleDescriptionChange = (event, optionNumber) => {
    // Accepts three arguments: event, option number, and property
    const newQuarter3 = { ...quarter3 }; // Create a copy of the state

    // console.log(optionNumber, property, event.target.value);
    // Update the appropriate option's property based on arguments
    newQuarter3[`option${optionNumber}`]["description"] = event.target.value;

    setQuarter3(newQuarter3); // Update the state with the modified object
  };

  const handleEventChange = (event) => {
    // Accepts three arguments: event, option number, and property
    const newQuarter3 = { ...quarter3 }; // Create a copy of the state

    // console.log(optionNumber, property, event.target.value);
    // Update the appropriate option's property based on arguments
    newQuarter3["event"] = event.target.value;

    setQuarter3(newQuarter3); // Update the state with the modified object
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateQuarter3(quarter3);
  };

  return (
    <div className="w-[100%] h-[100vh] overflow-auto flex">
      <AdminNav />
      <div className="h-[100vh] overflow-auto flex-1">
        <div className="flex-1 min-h-[100vh] bg-[#FBB748] md:py-4 py-[3rem]">
          <h1 className="mx-auto w-[95%] md:w-[85%] bg-white px-2 py-2 rounded font-bold text-center text-[1.4rem]">
            Update Quarter 3
          </h1>
          <div className="mx-auto mt-4 w-[95%] md:w-[85%] bg-white px-4 py-2 rounded text-start">
            {quarter3 && (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <h1 className="font-bold text-1.4rem">Option 1:</h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col flex-1 items-start gap-2">
                      <label htmlFor="opt1Desc">Description:</label>
                      <textarea
                        id="opt1Desc"
                        value={quarter3 && quarter3.option1.description}
                        onChange={(event) => handleDescriptionChange(event, 1)}
                        className="bg-[#FCC56B] px-3 py-2  rounded resize-none w-[100%] text-[#00000084] outline-none"
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
                          value={quarter3.option1.cost}
                          onChange={(event) =>
                            handleInputChange(event, 1, "cost")
                          }
                          className="bg-[#FCC56B] px-3 py-2 rounded w-[100%] text-[#00000084] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt1OtherCost" className="w-max">
                          Other Cost:
                        </label>
                        <input
                          type="number"
                          id="opt1OtherCost"
                          value={quarter3.option1.otherCost}
                          onChange={(event) =>
                            handleInputChange(event, 1, "otherCost")
                          }
                          className="bg-[#FCC56B] px-3 py-2 rounded w-[100%] text-[#00000084] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt1Income" className="w-max">
                          Income:
                        </label>
                        <input
                          type="number"
                          id="opt1Income"
                          value={quarter3.option1.income}
                          onChange={(event) =>
                            handleInputChange(event, 1, "income")
                          }
                          className="bg-[#FCC56B] px-3 py-2 w-[100%] rounded text-[#00000084] outline-none"
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
                        value={quarter3.option2.description}
                        onChange={(event) => handleDescriptionChange(event, 2)}
                        className="bg-[#FCC56B] px-3 py-2  rounded resize-none w-[100%] text-[#00000084] outline-none"
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
                          value={quarter3.option2.cost}
                          onChange={(event) =>
                            handleInputChange(event, 2, "cost")
                          }
                          className="bg-[#FCC56B] px-3 py-2 rounded w-[100%] text-[#00000084] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt2OtherCost" className="w-max">
                          Other Cost:
                        </label>
                        <input
                          type="number"
                          id="opt2OtherCost"
                          value={quarter3.option2.otherCost}
                          onChange={(event) =>
                            handleInputChange(event, 2, "otherCost")
                          }
                          className="bg-[#FCC56B] px-3 py-2 rounded w-[100%] text-[#00000084] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt2Income" className="w-max">
                          Income:
                        </label>
                        <input
                          type="number"
                          id="opt2Income"
                          value={quarter3.option2.income}
                          onChange={(event) =>
                            handleInputChange(event, 2, "income")
                          }
                          className="bg-[#FCC56B] px-3 py-2 w-[100%] rounded text-[#00000084] outline-none"
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
                        value={quarter3 && quarter3.option3.description}
                        onChange={(event) => handleDescriptionChange(event, 3)}
                        className="bg-[#FCC56B] px-3 py-2  rounded resize-none w-[100%] text-[#00000084] outline-none"
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
                          value={quarter3.option3.cost}
                          onChange={(event) =>
                            handleInputChange(event, 3, "cost")
                          }
                          className="bg-[#FCC56B] px-3 py-2 rounded w-[100%] text-[#00000084] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt3OtherCost" className="w-max">
                          Other Cost:
                        </label>
                        <input
                          type="number"
                          id="opt3OtherCost"
                          value={quarter3.option3.otherCost}
                          onChange={(event) =>
                            handleInputChange(event, 3, "otherCost")
                          }
                          className="bg-[#FCC56B] px-3 py-2 rounded w-[100%] text-[#00000084] outline-none"
                        />
                      </div>
                      <div className="flex flex-col flex-1 items-start gap-2">
                        <label htmlFor="opt3Income" className="w-max">
                          Income:
                        </label>
                        <input
                          type="number"
                          id="opt3Income"
                          value={quarter3.option3.income}
                          onChange={(event) =>
                            handleInputChange(event, 3, "income")
                          }
                          className="bg-[#FCC56B] px-3 py-2 w-[100%] rounded text-[#00000084] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 items-start gap-2 mt-6">
                  <label htmlFor="event" className="font-bold">
                    Event:
                  </label>
                  <textarea
                    id="event"
                    value={quarter3.event}
                    onChange={(event) => handleEventChange(event)}
                    className="bg-[#FCC56B] px-3 py-2  rounded resize-none w-[100%] text-[#00000084] outline-none"
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

export default UpdateQuarter3Info;
