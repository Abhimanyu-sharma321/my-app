"use client";
import { useEffect } from 'react';
import Script from 'next/script';

const IDmeButton = (event) => {
    useEffect(() => {
        const BindIDme = () => {
            let domain = "https://s3.amazonaws.com/idme/developer/idme-buttons/";

            var button = document.getElementById('idme-wallet-button');
            button.style.width = "300px";
            var scope = button.getAttribute("data-scope");
            var client = button.getAttribute("data-client-id");
            var redirect = button.getAttribute("data-redirect");
            var response = button.getAttribute("data-response");
            var state = button.getAttribute("data-state");
            var display = button.getAttribute("data-display");
            var logo = button.getAttribute("data-logo");
            var hero = button.getAttribute("data-hero");
            var text = button.getAttribute("data-text");
            var verify = button.getAttribute("data-show-verify");
            var hlp = button.getAttribute("data-hlp");
            var type = button.getAttribute("data-type");
            var country = button.getAttribute("data-country");
            var language = button.getAttribute("data-language");
            var appId = button.getAttribute("data-app-id");
            var multiple = scope.split(",").length > 1;

            // build widget parameters
            var params = "";

            if (scope && multiple) {
                params += "&scopes=" + scope;
            } else {
                params += "&scope=" + scope;
            }

            if (hlp) params += "&hlp=" + hlp;
            if (hero) params += "&hero_url=" + hero;
            if (logo) params += "&logo_url=" + logo;
            if (state) params += "&state=" + state;
            if (client) params += "&client_id=" + client;
            if (redirect) params += "&redirect_uri=" + redirect;
            if (response) params += "&response_type=" + response;
            if (country) params += "&country=" + country;
            if (language) params += "&language=" + language;
            if (appId) params += "&appid=" + appId;

            if (type) {
                params += "&type=" + type
            } else {
                params += "&type=button"
            }

            params += "&source=" + "idme_widget_old";
            params += "&current_url=" + window.location.origin + window.location.pathname;

            var buttonLink = null;

            if (hlp) {
                buttonLink = hlp;
            } else if (multiple) {
                buttonLink = "https://groups.id.me/?" + params;
            } else {
                buttonLink = "https://api.id.me/oauth/authorize?" + params;
            }

            var container = document.createElement("span");
            var trigger = document.createElement("div");
            var buttonElem = document.createElement("a");
            // var description = document.createElement("span");

            container.id = "idme-verification";
            // trigger.className = "idme-trigger";
            trigger.style.width = "300px";
            // buttonElem.className = "idme-trigger-link idme-unify-button";
            // description.className = "idme-description"

            // description.innerHTML = 'Verification by ID.me â€¢ <a href="https://www.id.me/about" target="_new">What is ID.me?</a>'

            // display offer text if present
            if (text) {
                var offer = document.createElement("span");

                offer.className = "idme-text";
                offer.innerHTML = text;

                trigger.appendChild(offer);
            }

            // toggle popup user experience
            if (display === "popup") {
                var clickHandler = function () {
                    new IDme.Util.Popup(buttonLink, 775, 850, window.innerWidth, window.innerHeight);
                };

                buttonElem.href = "javascript:void(0);";
                buttonElem.onclick = clickHandler;
            } else {
                buttonElem.href = buttonLink;
                buttonElem.target = "_parent";
            }

            buttonElem.innerHTML = '<img src="' + domain + 'assets/img/verify.svg" alt="ID.me Logo"/>';

            trigger.appendChild(buttonElem);

            // display what is ID.me show verify true
            if (verify) {
                var description = document.createElement("span");

                description.className = "idme-description";
                description.innerHTML = 'Verification by ID.me â€¢ <a href="https://www.id.me/about" target="_new">What is ID.me?</a>';

                trigger.appendChild(description);
            }

            container.appendChild(trigger);
            container.style.width = "300px";
            container.style.height = "200px";
            container.style.backgroundColor = "#4d4d4"
            // insert after widget
            button.parentNode.insertBefore(container, button.nextSibling);

            // remove widget
            button.remove();

        };

        const DOMReady = (fn) => {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", fn);
            } else {
                fn();
            }
        };

        DOMReady(BindIDme);
    }, []);





    return (
        <>
            <Script
                src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/js/unified/export.js"
                strategy="afterInteractive"
            />
            <span
                id="idme-wallet-button"
                data-scope="military,responder"
                data-client-id="8d2bd46045ef66793c589f9fc7d0a0b1"
                data-redirect="https://perfectlyposh.vercel.app/idme/callback"
                data-response="code"
                data-text="[AFFINITY GROUP] receives [OFFER] with ID.me"
                data-show-verify="true">
            </span>
        </>
    );
};

export default IDmeButton;
