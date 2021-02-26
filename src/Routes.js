import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './container/AdminPanel/AdminPanel';
import AdminPanelAdd from './container/AdminPanel/AdminPanelAdd';
import AdminPanelEdit from './container/AdminPanel/AdminPanelEdit';
import AdminContextProvider from './container/contexts/AdminContext';
import AuthContextProvider from './container/contexts/AuthContext';
import ProductsContextProvider from './container/contexts/ProductContext';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Home from './container/Home/Home';
import ProductDetails from './container/ProductDetails/ProductDetails';
import Search from './container/Search/Search';
import SearchPage from './container/Search/SearchPage';
import SignIn from './container/SignIn/SignIn';
import SignUp from './container/SignUp/SignUp';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <ProductsContextProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/" />
                        <Route exact path="/products-details:id" component={ProductDetails} />
                    </Switch>
                </ProductsContextProvider>
                <AdminContextProvider>
                    <Switch>
                        <Route exact path="/admin-panel" component={AdminPanel} />
                        <Route exact path="/admin-panel-add" component={AdminPanelAdd} />
                        <Route exact path="/admin-panel-edit" component={AdminPanelEdit} />
                    </Switch>
                </AdminContextProvider>
                <AuthContextProvider>
                    <Switch>
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </AuthContextProvider>
            </BrowserRouter>
            <Footer />

        </div>
    );
};

export default Routes;