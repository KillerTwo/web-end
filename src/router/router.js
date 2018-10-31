import React from 'react';
import ContentPage from '../pages/ContentPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import InformPage from '../pages/inform';
import PersonInfoPage from '../pages/User/PersonInfo';
import ContractPage from '../pages/User/ContractPage';
import TransferPostPage from '../pages/User/TrasferPost';
import ApplicationPage from '../pages/User/ApplicationPage';
import AddressBookPage from '../pages/User/AddressBook';



function ContentRouter(props) {
    return (
        <div>

            <ContentPage>
                <Switch>
                    {/* <Route path='/' render={() =>
                        <Redirect to="/sub" />
                    } /> */}
                    <Route path='/user' exact component={InformPage} />
                    <Route path='/user/info' component={PersonInfoPage} />
                    <Route path='/user/contract' component={ContractPage} />
                    <Route path='/user/apply' component={ApplicationPage} />
                    <Route path='/user/transfer' component={TransferPostPage} />
                    <Route path='/user/addressbook' component={AddressBookPage} />
                </Switch>
            </ContentPage>

        </div>
    );
}
export default ContentRouter;