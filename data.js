window.BENCHMARK_DATA = {
  "lastUpdate": 1730982939261,
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
      }
    ]
  }
}