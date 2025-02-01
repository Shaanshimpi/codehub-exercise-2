// @ts-ignore
import logo from './extensions/logo.png';

const config = {
  head:{
    favicon:logo
  },
  menu:{
    logo:logo
  },
  auth:{
    logo:logo
  },
  translations:{
    en:{
      "app.head.title" : "FireFist",
      "app.components.LeftMenu.navbrand.workplace": "panel",
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "Preference changes will apply only to you. More information is available.",
      "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi": "Made by FireFist",
      "app.components.LeftMenu.navbrand.title": "FireFist Dashboard",
      "Auth.form.button.login.strapi": "Log in via FireFist",
      "Auth.form.welcome.subtitle": "Log in to your FireFist account",
      "Auth.form.welcome.title": "Welcome to FireFist!",
    },
    
  },
  tutorials:false,
  notifications:{
    release:false
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
