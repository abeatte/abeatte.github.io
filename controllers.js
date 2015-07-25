/**
 * Created by art.beatte on 7/23/15.
 */
'use strict';

let controllers = angular.module('controllers', []);

(function(controllers) {

  controllers.controller('navCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.navigate = function(navTo) {
      $state.go(navTo);
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.currentTitle = $state.current.title;
    });

  }]);

  controllers.controller('projectsCtrl', ['$scope', function($scope) {
    $scope.interval = 5000;
    $scope.noWrapSlides = false;
    $scope.projects = [
      {
        name: "DocuSign",
        description: "DocuSign provides a simple and secure way to electronically sign documents and collect signatures from others. The app eliminates the hassles, costs, and lack of security sending documents for signature.",
        image: "res/projects/ds.png",
        link: "https://play.google.com/store/apps/details?id=com.docusign.ink&hl=en",
        platform: "Google Play"
      },
      {
        name: "SmartScale",
        description: "SmartScale is a weight scale app designed for the fitness industry. SmartScale reads in your daily weight, body fat composition and water weight composition and tracks your progress using easy to read graphs",
        image: "res/projects/ss.png",
        link: "https://play.google.com/store/apps/details?id=com.art.smartScale&hl=en",
        platform: "Google Play"
      },
      {
        name: "Stegosaurus",
        description: "Steganography tools for the average Joe! Hide secret messages behind Images and send them to your friends without anyone being the wiser. Simply snap a picture, encode a text message and send it off.",
        image: "res/projects/st.png",
        link: "https://play.google.com/store/apps/details?id=com.artbeatte.stegosaurus&hl=en",
        platform: "Google Play"
      },
      {
        name: "EasterBunny",
        description: "A Library for hiding Easter Eggs inside Android applications",
        image: "res/projects/eb.png",
        link: "https://github.com/abeatte/Android-EasterBunny",
        platform: "Github"
      },
      {
        name: "LolliPin",
        description: "A Lollipop material design styled android pin code library.",
        image: "res/projects/lp.png",
        link: "https://github.com/OrangeGangsters/LolliPin",
        platform: "Github"
      }
    ];
  }]);

  controllers.controller('aboutCtrl', ['$scope', function($scope) {
    $scope.companies = [
      {
        name: "DocuSign",
        title: "Software Engineer",
        description: `"I am the head of the Android Mobile team for DocuSign.
        I am in charge or delivering top notch quality features as well as maintaining and updating the legacy code.
        I have utilized cutting edge technologies to accomplish such things as In App Purchasing implementation(s),
        Google Glass development, Localization framework inception, and much more. The app has over 500,000 downloads
        and has won several awards, such as the 2014 and 2015 Tabby Awards."`,
        link: "https://play.google.com/store/apps/details?id=com.docusign.ink",
        linkTitle: "DocuSign for Android"
      },
      {
        name: "SmartScale App",
        title: "Founder, CTO & CEO",
        description: `"After many mornings weighing myself and laboriously entering the data into spreadsheets for
        calculation an elegant solution dawned on me: I need an app for this! After months of work I have finally
        done it. SmartScale App is a creation of my own doing. I set out to create an easy and user friendly way for
        people to enter in weight data and see their results over time. SmartScale allows a user to enter in weight,
        body fat and water weight measurements (commonly given by modern scales) and allows them to enter their
        measurements into the app for display and record keeping. This is a living app with many features and upgrades
        coming in the future."`,
        link: "https://play.google.com/store/apps/details?id=com.art.smartScale",
        linkTitle: "SmartScale App"
      }
    ];

    $scope.isLastCompany = function(company) {
      return !($scope.companies.indexOf(company) + 1 < $scope.companies.length);
    };
  }]);

})(controllers);

