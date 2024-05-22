window.BENCHMARK_DATA = {
  "lastUpdate": 1716383158278,
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
      }
    ]
  }
}