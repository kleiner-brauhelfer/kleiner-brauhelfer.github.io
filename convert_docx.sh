ROOT_PATH=$(dirname $0)
ROOT_PATH="`( cd \"$ROOT_PATH\" && pwd )`"

if [[ -z $1 ]]; then
    echo "Umwandlung mit Hilfe eines pandoc Dockers von docx zu md."
    echo
    echo "Aufruf: $0 FILE"
    echo
    echo "Die Eingabedatei wird nur aus dem Standardordner '_pandoc/input' gelesen und nach der Umwandlung gelöscht. Der Output wird nach '_pandoc/output' geschrieben."
fi

INPUT="${1}"
OUTPUT="$(echo ${1} | rev | cut -d'.' -f2 | rev).md"

docker run --rm --volume "${ROOT_PATH}:/data" --user `id -u`:`id -g` pandoc/latex:2.6 "/data/_pandoc/input/${INPUT}" -f docx -t gfm -o "/data/_pandoc/output/${OUTPUT}"