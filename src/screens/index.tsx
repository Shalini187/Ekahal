import { Navigation } from "react-native-navigation";
import TrendScreen from "./trendScreen";
import LoginScreen from "./loginScreen";
import ProfileScreen from "./profileScreen";
import CoverScreen from "./coverScreen";
import NewsScreen from "./newsScreen";
import ChartScreen from "./chartScreen";

export const RegisterScreen = () => {
    Navigation.registerComponent('na.CoverScreen', () => CoverScreen);
    Navigation.registerComponent('na.Login', () => LoginScreen);
    Navigation.registerComponent('na.Profile', () => ProfileScreen);
    Navigation.registerComponent('na.News', () => NewsScreen);
    Navigation.registerComponent('na.Charts', () => ChartScreen);
    Navigation.registerComponent('na.Trends', () => TrendScreen);
};