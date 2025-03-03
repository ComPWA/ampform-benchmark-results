window.BENCHMARK_DATA = {
  "lastUpdate": 1741000813303,
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
      }
    ]
  }
}