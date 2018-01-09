import React, { Component } from 'react';
import { Router, Scene, Stack } from "react-native-router-flux";
import PhoneContactList from "./components/PhoneContactList";
import PhoneContactDetail from "./components/PhoneContactDetail";
import ContactEdit from "./components/ContactEdit";

const AppRouter = () => (
    <Router>
        <Stack key='root'>
            <Scene key="contactList"
                   component={PhoneContactList}
                   title="Contact List"
                   inital
            />
            <Scene key="contactDetail"
                   component={PhoneContactDetail}
                   title="Contact Detail"
                   backTitle="Contacts"
                   rightTitle="编辑"
                   onRight={()=>{}}
            />
            <Scene key="contactEidt"
                   component={ContactEdit}
                   title="Contact Detail"
                   backTitle="Contacts"
                   rightTitle="保存"
                   onRight={()=>{}}
            />
        </Stack>
    </Router>
)

export default AppRouter;