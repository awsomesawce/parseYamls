#!/usr/bin/env bash
# Adjust npm path

adjust_npm_path() {
    # Add logic later
    if [[ "$(which npm)" == "/bin/npm" ]] || [[ "$(which npm)" == "/usr/bin/npm" ]]; then
        echo "Found the wrong npm, adjusting" >&2
        export PATH="$(npm -g bin)/npm:$PATH"
    else
        echo "You are all set to go!"
        echo "npm location is $(which npm)"
        echo "npm -g bin is $(npm -g bin)"
    fi
}