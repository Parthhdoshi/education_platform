"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function ExploreCourse() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


return (
  <Box
  sx={{ width: "100%", typography: "body1", fontWeight: "bold" }}
  className="max-w-7xl mx-auto"
  >
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All Courses" value="1" sx={{ fontWeight: "bold", textTransform: "none" }} />
            <Tab label="Business" value="2" sx={{ fontWeight: "bold", textTransform: "none" }} />
            <Tab
              label="Science and Technology"
              value="3"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            />
            <Tab
              label="Arts and Humanities"
              value="4"
              sx={{ fontWeight: "bold", textTransform: "none" }}
            />
            <Tab label="Health" value="5" sx={{ fontWeight: "bold", textTransform: "none" }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ typography: "body1", fontWeight: "bold" }}>
          { new Array(4).fill(0).map(() => (
            <>
          <div className="w-3/6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-md p-4">
            <div className="">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover rounded-xl"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
                  alt="Mountain"
                />
              </div>
              <div className="p-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case Study
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Finding customers for a new FinTech company
                </a>
                <p className="mt-2 text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
                <div className="mt-4">
                  <div className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-slate-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-slate-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <span className="text-slate-600">3.8/5</span>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
            </>
          ))}

        </TabPanel>
        <TabPanel value="2" sx={{ typography: "body1", fontWeight: "bold" }}>
          Item Two
        </TabPanel>
        <TabPanel value="3" sx={{ typography: "body1", fontWeight: "bold" }}>
          Item Three
        </TabPanel>
        <TabPanel value="4" sx={{ typography: "body1", fontWeight: "bold" }}>
          Item Four
        </TabPanel>
        <TabPanel value="5" sx={{ typography: "body1", fontWeight: "bold" }}>
          Item Five
        </TabPanel>
      </TabContext>
    </Box>
  );
}
