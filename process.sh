find src -name "*.css" -type f | while read cssfile; do
    outdir="build/$(dirname "${cssfile#src/}")"
    mkdir -p "$outdir"
    npx postcss "$cssfile" -o "$outdir/$(basename "$cssfile")"
done