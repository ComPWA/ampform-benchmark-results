window.BENCHMARK_DATA = {
  "lastUpdate": 1722932869492,
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
      }
    ]
  }
}