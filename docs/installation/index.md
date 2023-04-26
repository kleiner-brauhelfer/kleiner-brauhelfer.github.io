---
layout: page
title: Installation
nav_order: 2
has_children: false
---

# Installation

Der kleine-brauhelfer wurde für mehrere Betriebssysteme kompiliert und ist für Windows, MacOS und Linux verfügbar.

Der Source Code kann auf [GitHub](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-2) angesehen werden.

[Aktuelle Version herunterladen](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-2/releases/latest){: .btn .btn-primary target="_blank"}
[Changelog](http://github.com/kleiner-brauhelfer/kleiner-brauhelfer-2/blob/master/CHANGELOG.md){: .btn .btn-primary target="_blank"}

---

<details open markdown="block">
  <summary>
    Inhaltsverzeichnis
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Windows
- **kbh2_v2.x.x_setup_win_x64.exe**: Installationsdatei für 64bit System
- **kbh2_v2.x.x_portable_win_x64.zip**: Portable Version für 64bit System

---

## MacOS
- **kbh2_v2.x.x_macos.zip**: Installationsdatei für Mac OS

---

## Linux
- **kbh2_v2.x.x_linux_x64.deb**: Debian Packet für 64bit System
  - Benötigt zusätzlich:
    - [Qt 6](https://www.qt.io/download-qt-installer) inklusiv Qt WebEngine, Qt WebChannel und Qt Positioning
    - OpenSSL 1.1.1b oder höher
- **kleiner-brauhelfer-2-x86_64.AppImage**: Portable Version (AppImage) für 64bit System

Alternativ zum offiziellen [Qt Installer](http://www.qt.io/download-qt-installer) kann Qt mit [Another Qt installer (aqt)](http://github.com/miurahr/aqtinstall) installiert werden:
```
# Configure
VERSION='6.5.0'
QT_PATH="/opt/Qt"

# Location for logs and download files
mkdir /tmp/aqt
cd /tmp/aqt

# Install helper (https://github.com/miurahr/aqtinstall)
sudo pip install aqtinstall

# Install Qt
sudo python3 -m aqt install --outputdir ${QT_PATH} ${VERSION} linux desktop -m qtwebengine qtwebchannel qtpositioning

# Set ENV variables
export PATH=${QT_PATH}/${VERSION}/clang_64/bin/:$PATH
export QT_PLUGIN_PATH=${QT_PATH}/${VERSION}/clang_64/plugins/
export QML_IMPORT_PATH=${QT_PATH}/${VERSION}/clang_64/qml/
export QML2_IMPORT_PATH=${QT_PATH}/${VERSION}/clang_64/qml/
```
