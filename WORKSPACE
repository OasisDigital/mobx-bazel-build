workspace(
    name = "mobx",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Javascript / Typescript tooling

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "a54b2511d6dae42c1f7cdaeb08144ee2808193a088004fc3b464a04583d5aa2e",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.42.3/rules_nodejs-0.42.3.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    # name = "nodejs",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    symlink_node_modules = True,
    yarn_lock = "//:yarn.lock",
)

yarn_install(
    name = "npm-website",
    package_json = "//website:package.json",
    symlink_node_modules = False,
    yarn_lock = "//website:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

# http_archive(
#     name = "bazel_skylib",
#     sha256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44",
#     url = "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
# )

# load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

# bazel_skylib_workspace()
