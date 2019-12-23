workspace(
    name = "mobx",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Javascript / Typescript tooling

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "3887b948779431ac443e6a64f31b9e1e17b8d386a31eebc50ec1d9b0a6cabd2b",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.0.0/rules_nodejs-1.0.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    # name = "nodejs", # This is the built in name, included in this comment for clarity.
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    symlink_node_modules = True,
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

http_archive(
    name = "bazel_skylib",
    sha256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44",
    url = "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

# testing sandboxes

yarn_install(
    name = "npm_webpack_3",
    package_json = "//webpack-test/v3:package.json",
    symlink_node_modules = False,
    yarn_lock = "//webpack-test/v3:yarn.lock",
)

yarn_install(
    name = "npm_webpack_4",
    package_json = "//webpack-test/v4:package.json",
    symlink_node_modules = False,
    yarn_lock = "//webpack-test/v4:yarn.lock",
)
