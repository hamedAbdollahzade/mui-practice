// import "./App.css";
import { useState } from "react";
import ContentContainer from "./components/ContentContainer";
import MainLayout from "./layouts/MainLayout";
import SideBar from "./components/SideBar";
import TabPanel from "./components/tabs/TabPanel";

export default function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MainLayout>
        <SideBar value={value} handleChange={handleChange} />

        <ContentContainer>
          <TabPanel value={value} index={0}>
            صفحه اصلی
          </TabPanel>
          <TabPanel value={value} index={1}>
            درباره من
          </TabPanel>
          <TabPanel value={value} index={2}>
            رزومه من
          </TabPanel>
          <TabPanel value={value} index={3}>
            ارتباط با من
          </TabPanel>
          <TabPanel value={value} index={4}>
            نظرات دانشجویان
          </TabPanel>
        </ContentContainer>
      </MainLayout>
    </>
  );
}
