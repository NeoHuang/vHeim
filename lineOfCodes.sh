git ls-files | grep -v -e vendor -e tags | xargs wc -l | sort -nr
