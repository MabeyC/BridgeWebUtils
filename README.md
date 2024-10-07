# BridgeWebUtils
Utilities and modifications for BridgeWebs Websites

I have tested the BridgeWebs site for including scripts. 

  1. The External URL script section works as intended provided that you first upload the file (js or css) to Bridgewebs and link to it from within the same domain
  2. I have the js set for DOMContentLoaded as many elements appear to injected via javascript.
  This creates an issue of DOM shifting (in the case of the centered top menu). I may be worth expoloring how an external stylesheet might work rather than adjusting styles     in javascript. Another option is to recreate the menu in javasript, and hide the existing one, but this may also result in DOM Shifting depending on how it's implemented.
