window.BENCHMARK_DATA = {
  "lastUpdate": 1788973631056,
  "repoUrl": "https://github.com/ComPWA/ampform",
  "entries": {
    "AmpForm benchmark results": [
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "effb0ded2f74b7fdebb077f272dfbce0f8addae6",
          "message": "DX: implement benchmark monitoring (#427)",
          "timestamp": "2024-05-22T20:44:32+08:00",
          "tree_id": "bb6cee38b71ef1ae116d90b0732b36212223a02f",
          "url": "https://github.com/ComPWA/ampform/commit/effb0ded2f74b7fdebb077f272dfbce0f8addae6"
        },
        "date": 1716382225705,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 0.18574261911364154,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.383794009000042 sec\nrounds: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ef2142d41c0683a8eb39f9c2384a838f7e55520",
          "message": "ENH: cache Blatt–Weisskopf polynomials (#428)\n\n* DX: add test for Blatt–Weisskopf polynomials\r\n* MAINT: move form factor tests to separate file",
          "timestamp": "2024-05-22T21:05:26+08:00",
          "tree_id": "9905c3ddb8e5ef389f43d83a1e089fc904f5b758",
          "url": "https://github.com/ComPWA/ampform/commit/1ef2142d41c0683a8eb39f9c2384a838f7e55520"
        },
        "date": 1716383157911,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.416264714789343,
            "unit": "iter/sec",
            "range": "stddev: 0.004718472639169877",
            "extra": "mean: 413.86193900000023 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d5e50244715fc0976e9658446669defdda10904",
          "message": "MAINT: update pip constraints and pre-commit (#431)\n\n* MAINT: address `mypy` errors\r\n* MAINT: ignore hindawi.com in `linkcheck`\r\n* MAINT: implement autofixes from pre-commit.com hooks\r\n* MAINT: simplify `uv pip` install in RTD config\r\n* MAINT: sort keys in RTD config\r\n\r\n---------\r\n\r\nCo-authored-by: GitHub <noreply@github.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-25T20:16:51+08:00",
          "tree_id": "15e3eae0d495888e9202de610211bf2c4e447736",
          "url": "https://github.com/ComPWA/ampform/commit/7d5e50244715fc0976e9658446669defdda10904"
        },
        "date": 1719317848897,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.357556156439462,
            "unit": "iter/sec",
            "range": "stddev: 0.0011028518191786702",
            "extra": "mean: 424.1680510000094 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d88ef2ee3918a2c9369ab666272d9b838a3c568a",
          "message": "BREAK: change to Apache license (#432)",
          "timestamp": "2024-06-26T14:29:40+02:00",
          "tree_id": "4d6ca6ef58eef44aa8e55795173ba7f455fa8b51",
          "url": "https://github.com/ComPWA/ampform/commit/d88ef2ee3918a2c9369ab666272d9b838a3c568a"
        },
        "date": 1719405015775,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.316439241962917,
            "unit": "iter/sec",
            "range": "stddev: 0.0008865980594063316",
            "extra": "mean: 431.6970554999813 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c2a6fd0b379cf479268839be7b15b1058a305abe",
          "message": "MAINT: upgrade to SymPy v1.13 (#435)\n\n* DX: ignore missing types `sympy`\r\n* FIX: adjust simplification code for SymPy v1.13\r\n* MAINT: address `mypy` errors",
          "timestamp": "2024-08-06T10:27:08+02:00",
          "tree_id": "0cc74e3ccc01b1641b8c0979e9fc2b3d7edf117e",
          "url": "https://github.com/ComPWA/ampform/commit/c2a6fd0b379cf479268839be7b15b1058a305abe"
        },
        "date": 1722932868628,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.4126930934376243,
            "unit": "iter/sec",
            "range": "stddev: 0.00028483392518380594",
            "extra": "mean: 414.4745980000266 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a7d34fcbcf638f5d4b2b94fb0d65badde347900",
          "message": "MAINT: update pip constraints and pre-commit (#433)\n\n* DX: add `.envrc` definition\r\n* DX: apply new ComPWA dev configuration\r\n* DX: enable `ALL` Ruff linting rules\r\n* DX: switch to Ruff as formatter in Jupyter Lab\r\n* FIX: keep `black` in `doc` dependencies\r\n* FIX: revert `operator.add` change\r\n* MAINT: address remnaining Ruff issues\r\n* MAINT: apply Ruff autofixes\r\n* MAINT: apply unsafe Ruff autofixes\r\n* MAINT: ignore `unsafe_hash` deprecation warning\r\n* MAINT: remove redundant notebook cell metadata",
          "timestamp": "2024-08-07T17:04:49+02:00",
          "tree_id": "92be77e425946024ffcb4d5a85084e2afb70df8c",
          "url": "https://github.com/ComPWA/ampform/commit/1a7d34fcbcf638f5d4b2b94fb0d65badde347900"
        },
        "date": 1723043135379,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.2974813656053477,
            "unit": "iter/sec",
            "range": "stddev: 0.04162646828336957",
            "extra": "mean: 435.2592430000044 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb2be573c694fa8e6bf81b8725840b156e90573",
          "message": "MAINT: autoupdate constraints and pre-commit config (#436)\n\n* FIX: relink mpl-interactions API\r\n* MAINT: address Ruff issues\r\n* MAINT: apply fixes by pre-commit hooks\r\n* MAINT: write `sphinx-build` flags full\r\n\r\n---------\r\n\r\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2024-09-10T21:49:50-04:00",
          "tree_id": "e6df43c2c32c4e5322c9d2be1cae8aea9d879677",
          "url": "https://github.com/ComPWA/ampform/commit/edb2be573c694fa8e6bf81b8725840b156e90573"
        },
        "date": 1726019425033,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.289464142778281,
            "unit": "iter/sec",
            "range": "stddev: 0.036606204591277405",
            "extra": "mean: 436.7834295000108 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107720976+grayson-helmholz@users.noreply.github.com",
            "name": "grayson-helmholz",
            "username": "grayson-helmholz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e3a6f4271963ed135678fca122e7541c4fbac3c",
          "message": "MAINT: drop Python 3.7 & 3.8 support due to EOL (#440)",
          "timestamp": "2024-10-11T17:57:34+02:00",
          "tree_id": "d103cd62e08f1ca6e563e5dd43cd3878a031202f",
          "url": "https://github.com/ComPWA/ampform/commit/8e3a6f4271963ed135678fca122e7541c4fbac3c"
        },
        "date": 1728662290439,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.129612492559062,
            "unit": "iter/sec",
            "range": "stddev: 0.04906631773744703",
            "extra": "mean: 469.56899599999247 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "608c08c973d0f4b27e92fe0c8ce9c5e5a64807de",
          "message": "DX: define developer environment with `uv` (#439)\n\n* DOC: update Binder links\r\n* DX: clean up `tox` configuration\r\n\r\n---------\r\n\r\nCo-authored-by: GitHub <noreply@github.com>\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-18T15:13:06+02:00",
          "tree_id": "ba141ec37253e5f1698f24a5dca88907b04dbba9",
          "url": "https://github.com/ComPWA/ampform/commit/608c08c973d0f4b27e92fe0c8ce9c5e5a64807de"
        },
        "date": 1729257216492,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 3.3089562526200083,
            "unit": "iter/sec",
            "range": "stddev: 0.010029879770251385",
            "extra": "mean: 302.2101000000248 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cfff67889e73b1454f1f3d33d1fa4399f32ed5b",
          "message": "FIX: define dev dependencies as dependency groups (#441)\n\n* BREAK: remove `all` optional depdency\r\n* DX: run `pyright` in `tox -e sty` job\r\n* MAINT: update links to TRs\r\n* MAINT: update lock files",
          "timestamp": "2024-10-28T11:09:40+01:00",
          "tree_id": "9884fd8c47c5c4aae768d53a0e71b77cb7dbeef0",
          "url": "https://github.com/ComPWA/ampform/commit/8cfff67889e73b1454f1f3d33d1fa4399f32ed5b"
        },
        "date": 1730110210996,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 3.0899328589256885,
            "unit": "iter/sec",
            "range": "stddev: 0.034472405227285986",
            "extra": "mean: 323.63162750004904 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23cef79777974c7b936abd508ee387f8da93faa5",
          "message": "MAINT: update lock files (#442)\n\n* DX: outsource cron job to pre-commit.ci\r\n* DX: set `PYTHONHASHSEED=0`\r\n* DX: switch to Python 3.12 in developer environment\r\n* FIX: ignore https://doi.org/10.1093\r\n* MAINT: sort `check-dev-files` arguments\r\n\r\n---------\r\n\r\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2024-11-07T13:35:08+01:00",
          "tree_id": "c312091c1008f883dd1e3e97b26baf776302dd59",
          "url": "https://github.com/ComPWA/ampform/commit/23cef79777974c7b936abd508ee387f8da93faa5"
        },
        "date": 1730982938887,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.4912628422600993,
            "unit": "iter/sec",
            "range": "stddev: 0.041347835684732756",
            "extra": "mean: 401.40284800008885 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80910285+Zeyna777@users.noreply.github.com",
            "name": "Lena Poepping",
            "username": "Zeyna777"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2bbf6080d97a3e09375a705a91e73b49b6e44e38",
          "message": "MAINT: update lock files (#445)\n\n* DX: remove `files.watcherExclude`\n* MAINT: address PYI066\n  https://docs.astral.sh/ruff/rules/bad-version-info-order/\n* MAINT: implement updates from `check-dev-files`\n* MAINT: remove `enable-cache` argument (defaults to true)\n* MAINT: update to `astral-sh/setup-uv@v5`\n* MAINT: implement updates from pre-commit hooks\n* MAINT: update to QRules with `Fraction`s syntax",
          "timestamp": "2024-12-20T13:46:52Z",
          "tree_id": "09df4d818853f3a87f8aba3d92d8a3f0323916fc",
          "url": "https://github.com/ComPWA/ampform/commit/2bbf6080d97a3e09375a705a91e73b49b6e44e38"
        },
        "date": 1734702446368,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.761029705210349,
            "unit": "iter/sec",
            "range": "stddev: 0.001001978087106527",
            "extra": "mean: 362.1837165000059 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f955d0a89f26be16f4c5967fb1cd3a3b11614e0c",
          "message": "ENH: compute hash without `PYTHONHASHSED` (#444)\n\n* BEHAVIOR: compute hash with `md5`\n* DX: add more hashing tests\n* DX: shorten hash test values to first 7 digets\n* ENH: set `pickle` protocol to highest",
          "timestamp": "2024-12-20T13:52:12Z",
          "tree_id": "55b9b2c0a79aaf2ee138b4dc10e88c780475118b",
          "url": "https://github.com/ComPWA/ampform/commit/f955d0a89f26be16f4c5967fb1cd3a3b11614e0c"
        },
        "date": 1734702765051,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.786255649415439,
            "unit": "iter/sec",
            "range": "stddev: 0.00039506197286701605",
            "extra": "mean: 358.9046109999998 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fc6c9e8067c8090eae35d06fbc138ab6156b5c1",
          "message": "FIX: update ampform tag in `uv.lock` (#446)",
          "timestamp": "2024-12-20T14:53:35Z",
          "tree_id": "aec90a48ecb910122a3c9c5aa797e3aabf9ad773",
          "url": "https://github.com/ComPWA/ampform/commit/9fc6c9e8067c8090eae35d06fbc138ab6156b5c1"
        },
        "date": 1734706447372,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7889487726391042,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117242370508321",
            "extra": "mean: 358.5580380000053 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d573b6f8a38db975fa8f92d393dbf5ae85f648a",
          "message": "MAINT: update lock files (#447)\n\n* DX: convert Tox config to native TOML\n* DX: run benchmarks in default tox job\n* FIX: downgrade `pygments` and `sphinx-codeautolink`\n* FIX: remove Codacy badge\n* FIX: update link to `uv.lock` file explanation\n* FIX: set `CODECOV_TOKEN`\n* FIX: set `sphinx.configuration`\n* MAINT: clean up Codecov config\n\nCo-authored-by: GitHub <noreply@github.com>",
          "timestamp": "2025-01-13T19:55:39+01:00",
          "tree_id": "89a9dbcef9ad96c3233c775602dd73bda00e9cd7",
          "url": "https://github.com/ComPWA/ampform/commit/5d573b6f8a38db975fa8f92d393dbf5ae85f648a"
        },
        "date": 1736794576116,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7992354767255248,
            "unit": "iter/sec",
            "range": "stddev: 0.0016253846386406609",
            "extra": "mean: 357.2403995000002 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107720976+grayson-helmholz@users.noreply.github.com",
            "name": "grayson-helmholz",
            "username": "grayson-helmholz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3b2047e0e17b027acc8d5e8922ca4bc41bf1c5a",
          "message": "FIX: fix `is_integer()` bug for QRules v0.10.4 (#450)\n\n* DX: remove `setuptools-scm` version configuration\n* DX: run `tox -e uv` with lock runner\n* MAINT: implement updates from pre-commit hooks\n* MAINT: test framework on Python 3.13\n* MAINT: update lock files",
          "timestamp": "2025-01-29T14:15:07+01:00",
          "tree_id": "8d29a042e98800caddba1732a8fe947fb6a0c5c9",
          "url": "https://github.com/ComPWA/ampform/commit/f3b2047e0e17b027acc8d5e8922ca4bc41bf1c5a"
        },
        "date": 1738156539305,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.747947702471777,
            "unit": "iter/sec",
            "range": "stddev: 0.0003831663155001864",
            "extra": "mean: 363.9079444999993 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81e31d67336d69cd0aa21033dc454c29ebb6b3b3",
          "message": "FEAT: implement `NO_CACHE` and `perform_cached_substitution()` (#454)\n\n* BREAK: remove `cache_directory` argument\n* DX: implement `perform_cached_doit()` with decorator\n* DX: implement test for `perform_cached_doit()`\n* DX: run tests single-threaded\n* ENH: ignore disk cache if `NO_CACHE`\n* ENH: set cache dir with `COMPWA_CACHE_DIR`\n* FEAT: implement `perform_cached_substitution()`\n* MAINT: remove GH switch on hashes",
          "timestamp": "2025-01-29T14:50:19+01:00",
          "tree_id": "521e9ef15037cb6ee571f97370ae0aefccf9a460",
          "url": "https://github.com/ComPWA/ampform/commit/81e31d67336d69cd0aa21033dc454c29ebb6b3b3"
        },
        "date": 1738158654440,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.682799945263338,
            "unit": "iter/sec",
            "range": "stddev: 0.01884839935721376",
            "extra": "mean: 372.74490100000435 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b09c9c353cbcc6090219b6bf788330bbe8f5b92",
          "message": "FIX: add back cell output on website (#455)",
          "timestamp": "2025-02-04T13:23:21+01:00",
          "tree_id": "2e9020c06503cb42aefc732bc8151f2d81adedea",
          "url": "https://github.com/ComPWA/ampform/commit/2b09c9c353cbcc6090219b6bf788330bbe8f5b92"
        },
        "date": 1738671838757,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.776757462104878,
            "unit": "iter/sec",
            "range": "stddev: 0.0009322361452805396",
            "extra": "mean: 360.1322815000074 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c31c484b13532d3db146194210727a523e205c1c",
          "message": "FEAT: implement `partial_doit()` function (#456)\n\n* DX: hide `.mypy_cache` from VS Code search results\n* ENH: move more imports to `TYPE_CHECKING`\n* MAINT: remove `partial_doit()` from `symplot`\n* MAINT: remove redundant `_LOGGER` definition",
          "timestamp": "2025-03-03T11:03:51+01:00",
          "tree_id": "7c1e6291db525b77fa67678355ae885e8d7e63e8",
          "url": "https://github.com/ComPWA/ampform/commit/c31c484b13532d3db146194210727a523e205c1c"
        },
        "date": 1740996265709,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7795343122073484,
            "unit": "iter/sec",
            "range": "stddev: 0.0005030725337019213",
            "extra": "mean: 359.7724969999945 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7993d4b5e1f1a04d69990b2aaaa17a7e83f4d6b",
          "message": "FEAT: collect cached SymPy functions in `cached` module (#457)\n\n* ENH: use `TypeVar` on `cached.doit()` signature\n* MAINT: move `perform_cached_` functions to `cached` module\n* MAINT: rename to `test_cache_helpers`",
          "timestamp": "2025-03-03T11:34:01+01:00",
          "tree_id": "2142eeffd38b41546259babe22249291a125c578",
          "url": "https://github.com/ComPWA/ampform/commit/e7993d4b5e1f1a04d69990b2aaaa17a7e83f4d6b"
        },
        "date": 1740998084381,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.789775439536874,
            "unit": "iter/sec",
            "range": "stddev: 0.0010550740281934504",
            "extra": "mean: 358.4517899999895 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bb72e4d7f3a40f0f0a7a409df8d254e7f9f0a34",
          "message": "FEAT: implement `cached.unfold` for amplitude models (#458)\n\n* ENH: accept AmplitudeModel-like objects in `cached.unfold`\n* ENH: make `unfold()` more efficient and stable",
          "timestamp": "2025-03-03T12:19:43+01:00",
          "tree_id": "a1ef02e578dd8951f7e997d3a2836f3cbfec0209",
          "url": "https://github.com/ComPWA/ampform/commit/5bb72e4d7f3a40f0f0a7a409df8d254e7f9f0a34"
        },
        "date": 1741000813066,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.75638403418687,
            "unit": "iter/sec",
            "range": "stddev: 0.002476732010778669",
            "extra": "mean: 362.7941489999955 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab72d6438412c304ce195abbb890b8a47e732192",
          "message": "ENH: improve cache invalidation of `@cache_to_disk` (#459)\n\n* ENH: clarify in `NO_CACHE` warning that it comes from AmpForm\n* ENH: embed dependency versions in hash\n* ENH: embed function name and package version in hash\n* ENH: organize cache folder like Git index\n* ENH: overwrite dump and load method in `cache_to_disk()` decorator\n* FIX: make parameter substitution argument hashable\n* FIX: set correct function name in warning",
          "timestamp": "2025-03-03T14:25:42+01:00",
          "tree_id": "9d234e583a3f5e80e8bbf85eb2e03d8af30cc765",
          "url": "https://github.com/ComPWA/ampform/commit/ab72d6438412c304ce195abbb890b8a47e732192"
        },
        "date": 1741008375473,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.532834045889173,
            "unit": "iter/sec",
            "range": "stddev: 0.0036678986385123365",
            "extra": "mean: 394.8146550000047 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28e571583f571a8af33b53246ee0f2c07defd2cf",
          "message": "FIX: pull previous benchmark results (#461)\n\n* FIX: only push if not PR",
          "timestamp": "2025-03-03T17:43:21+01:00",
          "tree_id": "9459b3d96956f09f54e1e2d45d0244f8a51a14d6",
          "url": "https://github.com/ComPWA/ampform/commit/28e571583f571a8af33b53246ee0f2c07defd2cf"
        },
        "date": 1741020237308,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7881585762123344,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424897945838306",
            "extra": "mean: 358.65965749999873 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fe1065c81ee06b3184f22c477b5dbd3b37b4652",
          "message": "DOC: redirect compwa.github.io/ampform to benchmark page (#462)",
          "timestamp": "2025-03-04T11:48:18+01:00",
          "tree_id": "c9b914b5992603b15d2bf4b2f0ce52b49444ca58",
          "url": "https://github.com/ComPWA/ampform/commit/0fe1065c81ee06b3184f22c477b5dbd3b37b4652"
        },
        "date": 1741085329574,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7828048141844515,
            "unit": "iter/sec",
            "range": "stddev: 0.004762342958065436",
            "extra": "mean: 359.349672999997 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa1004b376041e1b4133e00a25a304a450654029",
          "message": "ENH: use memoization on functions in `cached` module (#464)\n\n* DOC: update CI badge\n* ENH: do not sort `frozendict` (does not affect hash)\n* FIX: use `GITHUB_TOKEN` instead of `PAT`\n* MAINT: install `frozendict`",
          "timestamp": "2025-03-06T09:07:11+01:00",
          "tree_id": "6621400cb3164b71e91d6d2a9d16dd65167eb696",
          "url": "https://github.com/ComPWA/ampform/commit/fa1004b376041e1b4133e00a25a304a450654029"
        },
        "date": 1741248464599,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.759672947240243,
            "unit": "iter/sec",
            "range": "stddev: 0.0019498745262770116",
            "extra": "mean: 362.3617795000058 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e848487b04c0ee650f689dd9ed3b86b88edc9e13",
          "message": "ENH: convert to `sp.Symbol` before computing `unfold` hash (#465)\n\n* DX: run tests on CI multithreaded\n* DX: test large hash on larger amplitude model",
          "timestamp": "2025-03-06T21:08:46+01:00",
          "tree_id": "2ccb441d38abcde3d7ae4fe2c09691069bd8cfaf",
          "url": "https://github.com/ComPWA/ampform/commit/e848487b04c0ee650f689dd9ed3b86b88edc9e13"
        },
        "date": 1741291760077,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.800860125098525,
            "unit": "iter/sec",
            "range": "stddev: 0.0016863916903667635",
            "extra": "mean: 357.0331810000056 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5aa68f1e3c261f89d7bd76f408a50905025a570",
          "message": "ENH: memoize `get_readable_hash()` (#466)\n\n* BEHAVIOR: use memoization on `get_readable_hash()`\n* ENH: compute hash over mapping with `frozendict`\n* ENH: make it easier to use `make_hashable`\n* FIX: mark hash as `usedforsecurity=False`\n* MAINT: add more expected hashes to large hash test",
          "timestamp": "2025-03-06T21:29:41+01:00",
          "tree_id": "2a0e767c1c7346369c1844eb5b1e83545acab862",
          "url": "https://github.com/ComPWA/ampform/commit/a5aa68f1e3c261f89d7bd76f408a50905025a570"
        },
        "date": 1741293010854,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7600219166164717,
            "unit": "iter/sec",
            "range": "stddev: 0.002064357942564768",
            "extra": "mean: 362.31596349999506 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a043ffe7144f5a72c207995105bda1dc3aa8be81",
          "message": "FEAT: implement `cached.simplify` etc (#467)\n\n* FEAT: implement cached simplify and trigsimp\n* FEAT: implement `cached.subs`\n* FIX: add back `cached.doit()` to API",
          "timestamp": "2025-03-06T21:48:58+01:00",
          "tree_id": "1324ae78ebddae3c5469cbbc48f372a6b5f29621",
          "url": "https://github.com/ComPWA/ampform/commit/a043ffe7144f5a72c207995105bda1dc3aa8be81"
        },
        "date": 1741294169075,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7572771540686674,
            "unit": "iter/sec",
            "range": "stddev: 0.00024160848762556073",
            "extra": "mean: 362.6766349999997 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4cac5d84099ee1d1ce0677ded70a7f5d4133be09",
          "message": "BEHAVIOR: keep `sp.Indexed` in `unfold()` hash (#468)",
          "timestamp": "2025-03-07T15:59:13+01:00",
          "tree_id": "e1b3387d074a5e22b581ef4ef5a997cf9e58e036",
          "url": "https://github.com/ComPWA/ampform/commit/4cac5d84099ee1d1ce0677ded70a7f5d4133be09"
        },
        "date": 1741359582623,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7767934507793157,
            "unit": "iter/sec",
            "range": "stddev: 0.0011823815331009197",
            "extra": "mean: 360.1276140000067 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731141f7db222d02a44cd7d9ac360189e4a7ba5f",
          "message": "MAINT: update lock files (#469)\n\n* MAINT: implement suggestions by Ruff",
          "timestamp": "2025-03-07T16:31:24+01:00",
          "tree_id": "aed3ff1171e6625c9df064d4eeef976777d64a77",
          "url": "https://github.com/ComPWA/ampform/commit/731141f7db222d02a44cd7d9ac360189e4a7ba5f"
        },
        "date": 1741361513019,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.784607867823468,
            "unit": "iter/sec",
            "range": "stddev: 0.003604409641964811",
            "extra": "mean: 359.1169915000023 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78c07bf03a242f35de6ebf8d7f3499c765ad0f85",
          "message": "FIX: make values in mapping hashable (#470)\n\n* DX: write test for `make_hahsable()`\n* ENH: avoid returning tuple when one arg\n* ENH: embed function source code into hash\n* ENH: embed Python version in cache hash\n* FIX: call `_make_hashable_impl` in `_make_hashable_impl`\n* FIX: show warning before evaluating function",
          "timestamp": "2025-03-10T06:57:56+01:00",
          "tree_id": "8ad9af2ae8728edb5f65a9ee41cf24260f62f97d",
          "url": "https://github.com/ComPWA/ampform/commit/78c07bf03a242f35de6ebf8d7f3499c765ad0f85"
        },
        "date": 1741586314821,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7839679653483556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006942565296548247",
            "extra": "mean: 359.1995354999966 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf46fd285b3bd9821fab842a91cb0cb8aabb0b59",
          "message": "DX: switch to `poe` as task runner (#473)\n\n* DX: mark `TestLargeHash` as slow test\n* FIX: relink `ipywidgets` API\n* FIX: skip hash check in QRules v0.9\n* MAINT: address Pyright issues\n* MAINT: update developer configuration\n* MAINT: update hash values in tests\n* MAINT: upgrade lock files",
          "timestamp": "2025-08-11T19:09:32+02:00",
          "tree_id": "56cf74ed8b6bd0681e0fcff7d8c31004415f4dbd",
          "url": "https://github.com/ComPWA/ampform/commit/bf46fd285b3bd9821fab842a91cb0cb8aabb0b59"
        },
        "date": 1754932202181,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.528920363421515,
            "unit": "iter/sec",
            "range": "stddev: 0.03244400012894319",
            "extra": "mean: 395.42565849999534 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11aa86f791e76473e9dd36ba5fe31ce8a6b238c4",
          "message": "FIX: insert dynamics into symmetrized amplitudes (#476)\n\n* DOC: add docstring and doctest for `perform_combinatorics()`\n* DOC: add symmetrization example\n* DX: add symmetrization test\n* DX: add test for `perform_combinatorics()`\n* ENH: expose `perform_combinatorics()`\n\n---------\n\nCo-authored-by: Lena Poepping <80910285+Zeyna777@users.noreply.github.com>",
          "timestamp": "2025-08-11T19:21:17+02:00",
          "tree_id": "9263c0f0d40b1083e44b06f5a631ece8b15a8f55",
          "url": "https://github.com/ComPWA/ampform/commit/11aa86f791e76473e9dd36ba5fe31ce8a6b238c4"
        },
        "date": 1754932908536,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.530971171527151,
            "unit": "iter/sec",
            "range": "stddev: 0.037373964870838904",
            "extra": "mean: 395.1052510000004 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b12b8d1ce9efa736752d4c95a15847e303e1b98",
          "message": "ENH: use `aligned` environment instead of `array` (#477)",
          "timestamp": "2025-08-27T23:15:24+02:00",
          "tree_id": "2f388d7b93574dca03c353b8ecfcb6b1f82f9e57",
          "url": "https://github.com/ComPWA/ampform/commit/2b12b8d1ce9efa736752d4c95a15847e303e1b98"
        },
        "date": 1756329353622,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.4651410991426626,
            "unit": "iter/sec",
            "range": "stddev: 0.045988769822619895",
            "extra": "mean: 405.6562929999359 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80910285+Zeyna777@users.noreply.github.com",
            "name": "Lena Poepping",
            "username": "Zeyna777"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a46372921745c404d75d351e38d86a3e7b71d19b",
          "message": "BEHAVIOR: improve cut structure break-up momentum  (#479)",
          "timestamp": "2025-09-25T16:31:29+02:00",
          "tree_id": "39147e5036ea04779d2df8021ec5a409e4d37905",
          "url": "https://github.com/ComPWA/ampform/commit/a46372921745c404d75d351e38d86a3e7b71d19b"
        },
        "date": 1758810723294,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.570522054058747,
            "unit": "iter/sec",
            "range": "stddev: 0.033378237386434355",
            "extra": "mean: 389.0260339999969 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e3b769503b736befb11cc47bca553cb00a0eea5",
          "message": "MAINT: upgrade lock files (#481)\n\n* DX: use Python 3.13 in developer environment\n* FIX: dedent inserted texts\n* MAINT: test AmpForm on Python 3.14",
          "timestamp": "2025-10-13T16:01:24+02:00",
          "tree_id": "895adbc8cd7ba28bc31c8b94ecde99888bb2877e",
          "url": "https://github.com/ComPWA/ampform/commit/8e3b769503b736befb11cc47bca553cb00a0eea5"
        },
        "date": 1760364117848,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.6810694072702543,
            "unit": "iter/sec",
            "range": "stddev: 0.0012832955702654376",
            "extra": "mean: 372.98549499998046 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9d31ea20e8ab17b0500b4a3e7d6b45469e87cdc",
          "message": "BREAK: drop support for Python 3.9 (#482)",
          "timestamp": "2025-10-13T17:01:29+02:00",
          "tree_id": "f5f11086b54f4e3185b7b97daa29981bfc9f68f6",
          "url": "https://github.com/ComPWA/ampform/commit/a9d31ea20e8ab17b0500b4a3e7d6b45469e87cdc"
        },
        "date": 1760367921194,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.625522182066154,
            "unit": "iter/sec",
            "range": "stddev: 0.0008854681027820125",
            "extra": "mean: 380.87661449999644 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c4bc64bc04afe27c8494e3a8a39124f9635400c",
          "message": "BEHAVIOR: use single square root in `PhaseSpaceFactor` (#484)\n\n* BEHAVIOR: use single square root for `PhaseSpaceFactor`\n* DOC: explain performance decrease for different definitions\n* DOC: render floating-point precision errors\n* DOC: update explanation on analytic continuation page\n* DX: define Pixi `lab` task for Jupyter lab\n* DX: install `jupyterlab-quickopen`\n* FEAT: define `BreakupMomentumSplitSqrt` and `BreakupMomentumKallen`\n* FIX: update links to PWA pages (intersphinx has been removed)\n* MAINT: standardize docstring extension of phasespace factor protocols\n* MAINT: update Jupyter kernels",
          "timestamp": "2025-10-29T13:33:31+01:00",
          "tree_id": "ec2380387bc540f8a24469860cb94b09e45149c2",
          "url": "https://github.com/ComPWA/ampform/commit/1c4bc64bc04afe27c8494e3a8a39124f9635400c"
        },
        "date": 1761741244435,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.3540108085182863,
            "unit": "iter/sec",
            "range": "stddev: 0.002070044495312367",
            "extra": "mean: 424.8068855000042 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80910285+Zeyna777@users.noreply.github.com",
            "name": "Lena Poepping",
            "username": "Zeyna777"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16227f0b76da0a479f532f6e31fdb01d4d993dff",
          "message": "FEAT: implement general dispersion integral (#480)\n\n* BREAK: move break-up momentum to `kinematics` module\n* DOC: update link to Chung paper",
          "timestamp": "2026-01-30T16:31:03+01:00",
          "tree_id": "c87cd01fbb9684abbe852510056e4a99a38ec4ab",
          "url": "https://github.com/ComPWA/ampform/commit/16227f0b76da0a479f532f6e31fdb01d4d993dff"
        },
        "date": 1769787094779,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 3.1330879343252773,
            "unit": "iter/sec",
            "range": "stddev: 0.0007911259160279031",
            "extra": "mean: 319.17393350000367 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfdebe1e69b9fdeb4fd77f67584707ac043fa160",
          "message": "BREAK: remove `symplot` (#485)\n\n* BREAK: move `symplot` to `ampform.sympy.slider`\n* BREAK: remove `SliderKwargs` etc\n* DOC: widen cell output for wide formulas\n* DOC: write Issues instead of Tracker in PyPI\n* DX: define `test-all` task\n* DX: include `uv.lock` in VS Code search\n* DX: outsource lock upgrades to Dependabot\n* DX: run all CI tasks through `poe`\n* DX: switch to `ty` as type checker\n* DX: use Poe the Poet executor options\n* ENH: extend value type of dict\n* ENH: support MathJax in bibliography\n* ENH: widen key type of `kinematic_variables`\n* MAINT: apply new Ruff formatting\n* MAINT: remove `from __future__ import annotations` from notebooks\n* MAINT: remove install cells\n* MAINT: remove `mpl-interactions`\n* MAINT: remove mpl figure format magic call\n* MAINT: remove redundant init files under `tests/`\n* MAINT: remove whitespace from cells\n* MAINT: update bibliography style and citation keys\n* MAINT: update Jupyter kernels\n* MAINT: update test hashes\n* MAINT: upgrade lock files and dev files\n\nCo-authored-by: Remco de Boer <29308176+redeboer@users.noreply.github.com>",
          "timestamp": "2026-02-06T16:59:49+01:00",
          "tree_id": "67e9230cf77773edc903f690bbbefb4cd6960be2",
          "url": "https://github.com/ComPWA/ampform/commit/dfdebe1e69b9fdeb4fd77f67584707ac043fa160"
        },
        "date": 1770393621069,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.4487304679938147,
            "unit": "iter/sec",
            "range": "stddev: 0.01831258141560321",
            "extra": "mean: 408.3748754999874 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2044f9ad165f1d71c3fcd2eccd41a04e4f604b3f",
          "message": "BREAK: remove `HelicityAmplitudeBuilder.set_dynamics()` (#489)",
          "timestamp": "2026-02-06T17:12:15+01:00",
          "tree_id": "e4b84fea86eb28a711e116b5517ea46daf2b3bdd",
          "url": "https://github.com/ComPWA/ampform/commit/2044f9ad165f1d71c3fcd2eccd41a04e4f604b3f"
        },
        "date": 1770394369617,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.6505770139172817,
            "unit": "iter/sec",
            "range": "stddev: 0.0036829274860522153",
            "extra": "mean: 377.2763420000018 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90f467f41f1309fb706426d04ebbb86783ad16b1",
          "message": "FIX: stabilize numerical integral (#490)\n\n* DOC: improve Riemann sheet plot\n* DX: benchmark evaluation time of integral over Riemann sheets\n* DX: reduce resolution of Riemann sheet plot\n* DX: suppress `RemovedInSphinx10Warning` warning\n* ENH: make `quad_vec` call lambdification more extendable\n* FIX: remove default `limit=50` in `quad_vec()` call\n* FIX: remove `type()` call that was used for testing\n* MAINT: apply Prettier formatting to notebooks",
          "timestamp": "2026-02-10T23:27:39+01:00",
          "tree_id": "c1105b13215efeebbd093cb506af4f3306e28e87",
          "url": "https://github.com/ComPWA/ampform/commit/90f467f41f1309fb706426d04ebbb86783ad16b1"
        },
        "date": 1770762506413,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.687094431463261,
            "unit": "iter/sec",
            "range": "stddev: 0.003723593197031647",
            "extra": "mean: 372.1491840000013 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7caba34d547694db3225e0c1ab36d0d2c1af7ff",
          "message": "BREAK: convert `chew_manelstam_s_wave()` to expression class (#493)\n\n* DOC: disable full-screen button on website\n* DOC: improve phase space expressions in API\n* DOC: update `README`\n* DOC: use en-dash in names\n* DX: make `_get_subscript()` positional only\n* ENH: let `name` attribute overwrite function LaTeX\n* FIX: remove redundant `typings/` directory\n* MAINT: reduce number of declared variables\n* MAINT: remove `pyright` comments",
          "timestamp": "2026-02-13T15:08:19+01:00",
          "tree_id": "3d7187bfa2f748209df204cb789b568f654c2ca2",
          "url": "https://github.com/ComPWA/ampform/commit/a7caba34d547694db3225e0c1ab36d0d2c1af7ff"
        },
        "date": 1770991734747,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.670935398355209,
            "unit": "iter/sec",
            "range": "stddev: 0.002366513862566093",
            "extra": "mean: 374.40066900001057 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "80910285+Zeyna777@users.noreply.github.com",
            "name": "Lena Poepping",
            "username": "Zeyna777"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcec6cac3f0e2101bf5b6fff9c7d730a5fe6d0db",
          "message": "ENH: support `MatrixSymbol` in `HelicityModel` attributes (#495)\n\n* ENH: make signature in dict sorting functions generic",
          "timestamp": "2026-02-13T15:48:30Z",
          "tree_id": "bf4cab07aa7e7f6d4e2b30efe7465487bb783d40",
          "url": "https://github.com/ComPWA/ampform/commit/dcec6cac3f0e2101bf5b6fff9c7d730a5fe6d0db"
        },
        "date": 1770997746331,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.662248579956274,
            "unit": "iter/sec",
            "range": "stddev: 0.0016017107035770748",
            "extra": "mean: 375.6223245000001 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d596d3e771a424f091ac84aad99c64cb1c84b740",
          "message": "ENH: support more integration algorithms (#492)\n\n* BEHAVIOR: remove `np.vectorize()` call\n* BEHAVIOR: remove epsilon_prime\n* BREAK: make `name` argument keyword-only\n* BREAK: move `meson_radius` to 5th argument position\n* BREAK: rename `L` argument to `angular_momentum`\n* BREAK: rename `UnevalutableIntegral` to `NumericalIntegral`\n* ENH: descrease step size of epsilon sliders\n* ENH: improve widget for ell>0\n* ENH: pass algorithm configuration to `PhaseSpaceFactorPWave`\n* ENH: use `quadax.quadgk` in Riemann sheet notebook\n* FEAT: configure integration algorithm per expression node\n* FEAT: implement different algorithms for `NumericalIntegral`\n* FEAT: implement notebook with `quadax` demo\n* FEAT: support `kw_only` argument in `argument()` function\n* FIX: move `quadax` to notebook dependencies\n* FIX: set correct LaTeX syntax in equation\n* MAINT: avoid `dataclasses` aliases\n* MAINT: replace `versionadded` with `version-added`\n* MAINT: update BibTeX citation keys\n* MAINT: upgrade lock files",
          "timestamp": "2026-02-16T15:56:14+01:00",
          "tree_id": "0217db0ef0441904c2f88f8cb992fde254558495",
          "url": "https://github.com/ComPWA/ampform/commit/d596d3e771a424f091ac84aad99c64cb1c84b740"
        },
        "date": 1771253805475,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7139540078481534,
            "unit": "iter/sec",
            "range": "stddev: 0.0005846132592652369",
            "extra": "mean: 368.46608199999764 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fac2c9c70c57f9b5bc3c8a4c92bb734d243bdc6",
          "message": "DOC: reorganize tutorial pages (#497)\n\n* DOC: group amplitude nodebooks\n* DOC: group analyticity notebooks\n* DOC: improve landing page\n* DOC: merge `usage` into `index`\n* DOC: move phase space factor widget to separate notebook\n* DOC: update installation page\n* MAINT: remove ADR template",
          "timestamp": "2026-02-16T16:35:53+01:00",
          "tree_id": "add55ef0fb07e2d0f73ce3ca617203bac41447cc",
          "url": "https://github.com/ComPWA/ampform/commit/1fac2c9c70c57f9b5bc3c8a4c92bb734d243bdc6"
        },
        "date": 1771256185973,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 3.1038189574682526,
            "unit": "iter/sec",
            "range": "stddev: 0.00027082472562135117",
            "extra": "mean: 322.1837399999927 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "919fc345b78c95a78cb2edd859345ff7e6b06971",
          "message": "FIX: reduce pre-commit.ci schedule to quarterly (#498)\n\n* MAINT: address Ruff `ty` issues\n* MAINT: upgrade lock files\n* MAINT: use colon fences for `concat-autolink`",
          "timestamp": "2026-02-24T11:32:46+01:00",
          "tree_id": "9b1187e7a146ffb15995e30d003739e4837ffaf2",
          "url": "https://github.com/ComPWA/ampform/commit/919fc345b78c95a78cb2edd859345ff7e6b06971"
        },
        "date": 1771929201388,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.7041932540243323,
            "unit": "iter/sec",
            "range": "stddev: 0.00020824860391091966",
            "extra": "mean: 369.79605599999843 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c55d3c73089f53541de84b297416fd56880b430",
          "message": "MAINT: upgrade lock files (#499)\n\n* DX: update pre-commit config with Dependabot\n* MAINT: address `ty` issues",
          "timestamp": "2026-04-13T13:34:58+02:00",
          "tree_id": "fd2464e90beb24c36287ecb6b9b35ae7b87274d3",
          "url": "https://github.com/ComPWA/ampform/commit/5c55d3c73089f53541de84b297416fd56880b430"
        },
        "date": 1776080135897,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.681406982938301,
            "unit": "iter/sec",
            "range": "stddev: 0.002316565253768915",
            "extra": "mean: 372.93853799999965 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9900bb884450d202e63176ed8bbaa85b4cbdb815",
          "message": "MAINT: upgrade `actions/deploy-pages` (#500)",
          "timestamp": "2026-04-13T17:33:34+02:00",
          "tree_id": "6f53dd811cb4423ad2a0003b6113ae3726534302",
          "url": "https://github.com/ComPWA/ampform/commit/9900bb884450d202e63176ed8bbaa85b4cbdb815"
        },
        "date": 1776094452491,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.6954638524011183,
            "unit": "iter/sec",
            "range": "stddev: 0.0013319756295178137",
            "extra": "mean: 370.99366000000344 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f0c2771f2512a4e76ffec06a0556c1f9af4442f",
          "message": "FIX: determine numerical algorithm correctly (#501)\n\n* DX: add `poe upgrade` task\n* DX: group Poe the Poet tasks\n* MAINT: add type hints for `Printer`\n* MAINT: implement updates from auto-formatters\n* MAINT: upgrade lock files",
          "timestamp": "2026-06-05T21:42:16+02:00",
          "tree_id": "d2dc4d3a78fcb6cff308697a8df1a6bb11d5bcb2",
          "url": "https://github.com/ComPWA/ampform/commit/6f0c2771f2512a4e76ffec06a0556c1f9af4442f"
        },
        "date": 1780688571587,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.2767661290657633,
            "unit": "iter/sec",
            "range": "stddev: 0.052341045913725244",
            "extra": "mean: 439.21946449999894 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9713cac8d32889c5ae0627388540003b87eb4216",
          "message": "MAINT: upgrade lock files (#503)\n\n* DX: switch to Tombi as formatter for TOML",
          "timestamp": "2026-07-15T20:38:29+02:00",
          "tree_id": "78afe2d641a199f118cdf1adaa78b9d6b4aa98b6",
          "url": "https://github.com/ComPWA/ampform/commit/9713cac8d32889c5ae0627388540003b87eb4216"
        },
        "date": 1784140744236,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.4032616268916898,
            "unit": "iter/sec",
            "range": "stddev: 0.036621315463200646",
            "extra": "mean: 416.1011805000072 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b5edb02c7910d8b54e914339c6a29303536b316",
          "message": "DX: upgrade pre-commit hooks and lock files (#507)\n\n* DX: ignore local agent configuration\n* DX: pin reusable workflows by commit hash\n* FIX: match K-matrix residue symbols on str(s)\n* MAINT: consolidate qrules imports in helicity.decay\n* MAINT: migrate noqa codes to Ruff rule names\n* MAINT: simplify coefficient multiplicity test\n* MAINT: standardize `# ty: ignore` comments",
          "timestamp": "2026-09-02T12:29:27+02:00",
          "tree_id": "f40099a27c455b402c8b38a8a775ee4cbe0c7544",
          "url": "https://github.com/ComPWA/ampform/commit/0b5edb02c7910d8b54e914339c6a29303536b316"
        },
        "date": 1788344998462,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.3336917883920436,
            "unit": "iter/sec",
            "range": "stddev: 0.04417988319611476",
            "extra": "mean: 428.50559999999757 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49ad8eaef18d105be18abef7c04c6dff92d5907b",
          "message": "FIX: write disk cache files atomically (#508)\n\n* DX: increase Sphinx linkcheck timeout\n* FIX: keep computed result when cache write fails",
          "timestamp": "2026-09-02T14:20:33+02:00",
          "tree_id": "abf43ed8086db41192be8a07a2ee1f8d2b8c7d61",
          "url": "https://github.com/ComPWA/ampform/commit/49ad8eaef18d105be18abef7c04c6dff92d5907b"
        },
        "date": 1788351666247,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.346759673446005,
            "unit": "iter/sec",
            "range": "stddev: 0.04549031752464175",
            "extra": "mean: 426.11947500000724 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf0d31bb8e8c8e7ddea3154a0b1777fe428a8177",
          "message": "FIX: pickle nested unevaluated expressions (#509)\n\n* DX: add regression tests for pickling nested expressions\n* DX: ignore Ruff pickle rules in the test suite\n* MAINT: use DataclassInstance in dataclass field helpers",
          "timestamp": "2026-09-02T14:48:45+02:00",
          "tree_id": "f23674354e2f36c29c6f3886f8c3ec50ac557aab",
          "url": "https://github.com/ComPWA/ampform/commit/cf0d31bb8e8c8e7ddea3154a0b1777fe428a8177"
        },
        "date": 1788353360384,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.875504055552723,
            "unit": "iter/sec",
            "range": "stddev: 0.031567251359885466",
            "extra": "mean: 347.7651154999961 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc92774beb076559d2c6dd3810d72f9b5e9d7e89",
          "message": "DOC: visualize `qrules` results with Mermaid (#510)\n\n* DOC: hide QRules progress bar in notebooks\n* DOC: remove author from documentation footer\n* DOC: render amplitude expressions with aslatex()\n* DOC: render dynamics builder sources as code block\n* DOC: render formalism comparison table as Markdown\n* DOC: replace K-matrix Graphviz graphs with Feynman diagrams\n* DOC: stack topology graphs in get_boost_chain_suffix()\n* DX: remove Graphviz as documentation build dependency\n* FIX: keep documentation build working offline\n* FIX: restore html_static_path in Sphinx config\n* FIX: use aligned to avoid MathJax 4 nesting errors\n* MAINT: remove obsolete cSpell allow-list entries",
          "timestamp": "2026-09-04T16:14:59+02:00",
          "tree_id": "9690878808d9805fac859f9126e176fd95145476",
          "url": "https://github.com/ComPWA/ampform/commit/bc92774beb076559d2c6dd3810d72f9b5e9d7e89"
        },
        "date": 1788531332714,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 3.062822675356177,
            "unit": "iter/sec",
            "range": "stddev: 0.0011175363057202765",
            "extra": "mean: 326.4962114999719 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1eb4793f9816122326739d7ff3a77fb124922e65",
          "message": "DX: organize tests with `pytest-describe` (#516)\n\n* MAINT: upgrade lock files",
          "timestamp": "2026-09-09T13:11:27Z",
          "tree_id": "fd9d3d8af318f3272439797c45031066ca0cd2ed",
          "url": "https://github.com/ComPWA/ampform/commit/1eb4793f9816122326739d7ff3a77fb124922e65"
        },
        "date": 1788959519052,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.497549092636638,
            "unit": "iter/sec",
            "range": "stddev: 0.029767813801287825",
            "extra": "mean: 400.39253000000485 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c6bf4588f7364569c1b48728e97bd0ff716ff53",
          "message": "FIX: stabilize caching hashes (#515)\n\n* DOC: document hash stability on the public interface\n* FIX: make expression hashes independent of SymPy cache state\n* FIX: put sets and dicts in a fixed order in make_hashable\n* FIX: sort substitution mappings in cached wrappers\n* MAINT: hash pickled bytes directly into the digest\n* MAINT: use positional-only arguments and type variables",
          "timestamp": "2026-09-09T17:45:46+02:00",
          "tree_id": "d98b94ff97dfe4ba7fab900a4a025abefa72e05f",
          "url": "https://github.com/ComPWA/ampform/commit/3c6bf4588f7364569c1b48728e97bd0ff716ff53"
        },
        "date": 1788968784614,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.5668644180726212,
            "unit": "iter/sec",
            "range": "stddev: 0.0013078406608751365",
            "extra": "mean: 389.58037399999057 msec\nrounds: 2"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29308176+redeboer@users.noreply.github.com",
            "name": "Remco de Boer",
            "username": "redeboer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de8309178dff312ee1662044484a6e46bd86df08",
          "message": "FEAT: implement `BreitWigner` expression classes (#423)\n\n* BEHAVIOR: return expression classes from the BW builder\n* BREAK: deprecate relativistic_breit_wigner()\n* BREAK: remove determine_indices re-export from ampform.dynamics\n* DOC: document multi-channel Breit-Wigner\n* FEAT: implement MultichannelBreitWigner and ChannelArguments",
          "timestamp": "2026-09-09T19:06:37+02:00",
          "tree_id": "abb02da56b2812c0cd28950c100ab1e7fe54f586",
          "url": "https://github.com/ComPWA/ampform/commit/de8309178dff312ee1662044484a6e46bd86df08"
        },
        "date": 1788973630727,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/doit_speed.py::test_doit_speed",
            "value": 2.730567830072377,
            "unit": "iter/sec",
            "range": "stddev: 0.04884856561839443",
            "extra": "mean: 366.22419299999365 msec\nrounds: 2"
          }
        ]
      }
    ]
  }
}