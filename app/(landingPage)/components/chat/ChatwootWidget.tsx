'use client';
import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.chatwoot.com/packs/js/sdk.js"; 
    script.defer = true;
    script.async = true;
    script.onload = () => {
      
      window.chatwootSDK.run({
        websiteToken: "YxYgNGVj5WiX6kFbifqfbL9B", 
        baseUrl: "https://app.chatwoot.com",  
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); 
    };
  }, []); 
  return null; 
};

export default ChatwootWidget;
