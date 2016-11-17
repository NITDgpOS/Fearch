#firefox-search-extension

A firefox addon that lets you search music, videos, ebooks on FTP servers. It uses simple google search under the hood with the query modified to look only for FTP servers. We are interested in the content that is freely available on these servers.

## Setup

1. Download or git clone the repo (Unzip if downloaded)
2. Open Firfox and press Ctrl+O.This will bring up a file selection dialog: navigate to the "@firefox-search-extension-0.0.1.xpi" file, open it and follow the prompts to install the add-on.
3. The extension will be installed to firefox.
4. Note that Firefox by default requires add-ons, even locally developed ones, to be signed. After installation they'll show up disabled in the list of installed add-ons, noting the missing signature.So in order to use the add-on open about:config and set xpinstall.signatures.required to false to run it unsigned. This setting applies to any add-on, so take extra care to not accidently install a malicious one from elsewhere.
5. Now the add-on will be activ and you can use it, enjoy!!!

## License

The MIT License (MIT)
