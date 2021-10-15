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
[Changelog](https://github.com/kleiner-brauhelfer/kleiner-brauhelfer-2/blob/master/CHANGELOG.md){: .btn .btn-primary target="_blank"}

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

### Installer:
- kbh2_v2.x.x_setup_win_x64.exe (64bit)
- kbh2_v2.x.x_setup_win_x86.exe (32bit)

### Portable Version
- kbh2_v2.x.x_portable_win_x64.zip (64bit)
- kbh2_v2.x.x_portable_win_x86.zip (32bit)

---

## MacOS
- kbh2_v2.x.x_macos.zip

---

## Linux (Ubuntu/Debian)

### Debian-Packet:
- kbh2_v2.x.x_linux_x64.deb (64bit)
  - Benötigt zusätzlich Qt 5.15.2 mit folgenden Komponenten
    - Desktop gcc 64-bit, Qt Charts, Qt WebEngine
  - Benötigt OpenSSL 1.1.1b oder höher

- kbh2_v2.x.x_linux_x32.deb (32bit)
  - Neuere Qt Versionen werden für Linux 32bit nicht mehr angeboten. Deshalb werden nicht alle Features unterstüzt.
  - Benötigt zusätzlich Qt 5.5 mit folgenden Komponenten
    - Desktop gcc und Qt WebEngine
  - Benötigt OpenSSL 1.1.1b oder höher


### AppImage (portabel)
- kleiner-brauhelfer-2-x86_64.AppImage


### Installation Qt
Qt kann über den offiziellen [Installer](https://www.qt.io/download-qt-installer) installiert werden (Registrierung nötig). 

Alternativ kann [Another Qt installer](https://github.com/miurahr/aqtinstall) verwendet werden:
```
# Configure
VERSION='5.15.2'
QT_PATH="/opt/Qt"

# Location for logs and download files
mkdir /tmp/aqt
cd /tmp/aqt

# Install helper (https://github.com/miurahr/aqtinstall)
sudo pip install aqtinstall

# Install Qt
sudo python3 -m aqt install --outputdir ${QT_PATH} ${VERSION} linux desktop -m qtcharts qtwebengine

# Set ENV variables
export PATH=${QT_PATH}/${VERSION}/clang_64/bin/:$PATH
export QT_PLUGIN_PATH=${QT_PATH}/${VERSION}/clang_64/plugins/
export QML_IMPORT_PATH=${QT_PATH}/${VERSION}/clang_64/qml/
export QML2_IMPORT_PATH=${QT_PATH}/${VERSION}/clang_64/qml/
```
