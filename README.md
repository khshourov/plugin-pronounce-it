<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/khshourov/plugin-pronounce-it">
    <img src="icons/icon-96.png" alt="Logo" width="96" height="96">
  </a>

<h3 align="center">Plugin - Pronounce it!</h3>

  <p align="center">
    Find the IPA, pronunciation, and meanings of a word directly within the Firefox browser
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

With this simple plugin, you can search for the IPA, pronunciation, and meanings of a word. You can also double-click any word to display its lexical information. Additionally, it stores your search results in one place, allowing you to track words that give you trouble.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [Browser extensions - Mozilla | MDN](Firefox-extensions-url)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Installation -->
## Installation
Visit [releases](https://github.com/khshourov/plugin-pronounce-it/releases) and download the file with the .xpi extension from the latest release. Next, type `about:addons` in your Firefox URL bar and click the __*Tools for all add-ons*__ icon (next to the __*Manage Your Extensions*__ label). Then, select __*Install Add-on from File…*__ and choose the downloaded .xpi file. Firefox will prompt you to confirm the installation. Once confirmed, you’re all set. Enjoy the plugin!


<!-- USAGE EXAMPLES -->
## Usage
1.	Click the plugin toolbar icon.
   
![Plugin Toolbar Icon](docs/images/1.png)

2. Click the Google sign-in button.

![Google Sign-in Button](docs/images/2.png)

3. Enter your Google credentials (we will only access your Google ID, name, and email, and we will only store the Google ID to map data to your searches).

![Enter your Google credentials](docs/images/3.png)

4. Click the plugin toolbar icon again and enter your search word.

![Click again on the toolbar icon](docs/images/4.png)

![Type your search word](docs/images/5.png)

5. You can also double-click on a word to see the same result.

![Double click on word to search](docs/images/6.png)

6. Alternatively, select a word, right-click, and choose the “Pronounce it!” option from the context menu.

![Select text and click right button of your mouse](docs/images/7.png)

![Show the search result](docs/images/8.png)

7. You can also disable the double-click action for the current page.

![Domain is currently enable](docs/images/9.png)

![Action text](docs/images/10.png)

![Domain is disabled](docs/images/11.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Develop it as a cross-browser extension

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Set up development environment -->
## Set up development environment

To test the plugin, you have two options:

1.	In the Firefox URL bar, type about:debugging, click on “This Firefox,” then select “Load Temporary Add-on…” and choose any file from the plugin directory.
2.	Use the web-ext command-line tool, which opens a separate Firefox window for testing. It automatically reloads when file changes occur and can also be used for building and publishing the plugin.

Learn more about these approaches in [about:debugging](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing) and [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kamrul H. Shourov - shourov.kamrul@gmail.com

Project Link: [https://github.com/khshourov/plugin-pronounce-it](https://github.com/khshourov/plugin-pronounce-it)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Pronounce icons created by Flat Icons - Flaticon](https://www.flaticon.com/free-icons/pronounce)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
[Firefox-extensions-url]: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions
