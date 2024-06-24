# Pessiglione
_refactor Pessiglione ePrime task from uMaryland_

## Overview 
In this task participants are shown two photos side by side and asked to choose which is the best picture. 
They will select the one key for the image on the left and the 0 key for the images on the right. After selecting the photos, 
they will be given feedback either, “+5 win!”, “-5 lose!”, “keep your points!”, or “lose your points!” 
This will help them determine if the picture they selected is the best picture.

**Approx run time: 15 minutes**

## Development Guide

#### Install and configure XAMPP:
1. [Download XAMPP](https://www.apachefriends.org/download.html) with PHP version 7.3.19
2. Open XAMPP and click "Start" to boot the XAMPP application.
3. Navigate to "Services" and click "Start All" button.
4. Navigate to "Network", select localhost:8080, and click "Enable".
5. Navigate to "Volumes" and click "Mount".

#### Clone the git repository:
6. Open Terminal and navigate to the htdocs directory:

    Mac/Linux:

        cd ~/.bitnami/stackman/machines/xampp/volumes/root/htdocs
    Windows:

        cd C://xampp//htdocs

7. Clone into htdocs:

        git clone https://github.com/belieflab/pessiglionne.git

#### Modifty permissions:
8. Copy this text into your terminal from the htdocs folder (the folder you are already in).

        sudo chmod -R 777 pessiglionne/
        
#### Start experiment:     
9. Click this URL: [http://localhost:8080/pessiglionne](http://localhost:8080/pessiglionne)
      
      
      
### BRAVO! You're a XAMPP master.
        

