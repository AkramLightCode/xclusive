import * as React from 'react';
// import Toast from 'react-native-root-toast';
import { Alert, Platform, Keyboard } from 'react-native';
import Config from './Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export default class Helper extends React.Component {
    url = "";
    static appNav;
    static mainApp;
    static toast;
    static user = {};
    static navigationRef;
    static Loader;
    static device_type = Platform.OS == 'android' ? 'Android' : 'IOS';
    static device_token = '';
    static country_list = '';
    static globalLoader;
    static security_token = '';
    static verify_token = "";
    static isLogin = false;
    static userIdForgot = ""

    static getFormData(obj) {
        let formData = new FormData();
        for (let i in obj) {
            formData.append(i, obj[i]);
        }
        return formData;
    }

    static registerLoader(mainApp) {
        Helper.globalLoader = mainApp;
    }

    // static registerNavigator(ref) {
    //     Helper.navigationRef = ref;
    // }

    static registerLoged(mainApp) {
        Helper.mainApp = mainApp;
    }

    static showLoader() {
        // Keyboard.dismiss();
        Helper.globalLoader.setState({ loader: true })
    }

    static hideLoader() {
        Helper.globalLoader.setState({ loader: false })
    }

    static registerToast(toast) {
        Helper.toast = toast;
    }

    static set(msg) {
        Toast.show(msg, {
            duration: Toast.durations.SHORT,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            textColor:"#000",
            containerStyle: { backgroundColor: '#fff', width: '70%', }
        });
    }

    static async setData(key, val) {
        try {
            let tempval = JSON.stringify(val);
            await AsyncStorage.setItem(key, tempval);
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    }

    static async getData(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            if (value) {
                let newvalue = JSON.parse(value);
                return newvalue;
            } else {
                return value;
            }
        } catch (error) {
            console.error(error, "AsyncStorage")
        }
    }

    static async removeItemValue(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (exception) {
            return false;
        }
    }

    static async makeRequest({ url, data, method = "POST" }) {
        console.log('-----------form Data ', data);
        console.log(token, "   ++++++++++++tokentoken")
        console.log(finalUrl, "-------------------finalUrl");
        let finalUrl = Config.baseurl + url;
        let form;
        let methodnew;
        // let token = Helper.security_token
        let token = await this.getData('token');
        let location_id = await this.getData('userLocationId');
        let varheaders;
        if (method == "POSTUPLOAD") {
            methodnew = "POST";
            varheaders = {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data;',
                Authorization: token,
                "location_id": location_id
            }
            // form = JSON.stringify(data);
            form = data;
        }

        else if (method == "POST") {
            methodnew = "POST";
            if (token) {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": token,
                    "location_id": location_id
                }
            } else {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
            form = JSON.stringify(data);
            // form = data;
        }
        else {
            methodnew = "GET";
            if (token) {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": token,
                    "location_id": location_id
                }
            } else {
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        }
        return fetch(finalUrl, {
            body: form,
            method: methodnew,
            headers: varheaders,
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return JSON.stringify(responseJson);
            })
            .catch((error, a) => {
                console.log('errorerror', error);
            });
    }

    static getImageUrl(url) {
        return finalUrl = Config.imageUrl + '/' + url;
    }
}