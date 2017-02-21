# footwork-website
Website for FootworkJS

## Common Commands

* Watch and build on changes

  ```bash
  bundle exec jekyll build --watch
  ```

* Build Site and Zip for upload

  ```bash
  # Run this from the root of the project
  rm -f footwork-website.tar.gz && bundle exec jekyll build && tar czf footwork-website.tar.gz --transform "s,^,footwork-website/,"  -C ./_site ./
  ```
