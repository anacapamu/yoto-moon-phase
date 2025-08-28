// TODO: Replace with MP3s for each phase
export const PHASES = [
  {
    key: 'new',
    label: 'New Moon',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAjtJREFUOI11k71qlFEQhp+Zc76f3WTdTRTUxl+wEAQvQAsJAWGt9GKs0ngTWqiNhaWSIk00Su5BQRaJQRTCqjEbNsn3feecsTBZNYlTz/vMzMs7YmYcrvM378yIxbtKvCS+/GZinw3/au3Ni5+He+VvwMVb/TNW109cVszHUGWY4fIWFgMpxeiy/LHGtDBYXRoeAVy51b9e7+y8xWk31TWpqdCswLemqEebuLzAT3cB1lWkP1hZfDcBXLh972wcbqy5oizCeLSPVvJOD9QRxiMsNOAUDLJWZ8M5d22wujRUADY3n1usi7C7vS8Wiu4s4jNElazTA++xELAYCNX4dHLuAYCcu9GfSbs/v1tsRFAsRQDy7inEuYk/zegHKTRoXoIZCCnrlbPqvMxhJhhgibx7EnEekX/dzjoz+KkuLi9wZZtUV0os5hTkQtY+AaKYGc14C1e2Qd2/BBFcXhCrPTTLcWUbMy56SCbegyUALARC2MZSxLemj0CyTg8AV7QQE1MR/YQZsj9RVAEj7o6JdXUkZBOW8wis+WTutQpNfmImMyBVFWFntD9QjlebQUqNFc2K/o5neoooIoorW/h2Bz/dQ7P8eH0MJOHZx+XlLQXQmBaA9QMfXNnG5cWx4ljvYfA1V38fQAEGq0tDFemnph5aCMS9nf/e7tR/8UU5/+HN4rcJAGCwsvguz1tXxftHiIaDQP3ZmxqRh95n1wevXr6fmHncO1+en+8SizmSngdA0zquev1xeXnrcO8v9ioCktr00joAAAAASUVORK5CYII=',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'waxing-crescent',
    label: 'Waxing Crescent',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAApFJREFUOI1tk89rnGUQxz8zz/M+7/54k82mpdlcmrSCQlEshlxED2VZEFZFXBeUeilCL4p4ak+96MGrNz2oJ8FjwYOIaBXRP6FeisaKFUpss9k1m+774xkPpsFNnPPMZ2a+8x0xM47G2rPPtzXOXsW5zluvbNx/Z7BxxxX6DesvjY7myn8BZy70O5bnn7gk9Mr8QeKcR5OU9y5t/vHy02urvpZ97Fx1jc5w+xjg0Qv98/l0+j1OWzHPicUMTVJ8vUk+3uHNwUZx5Y1ugnC7UvqhM7h5CFh/brBabd/dcmktLffGB2glLCyBOsrpmISKHz8YWJaqhPbJu2mz9gSd4bYCsLPzuVV5Wu5PDoqFtLWM+ARRJcmWyE25/tOvYkVOOR6tVObfBZDTz/TbcX90z6pCBMViBUBonUScO9SnmNxn/VTGV++/iFlEVGMjO7WszksXM8EAi4TWCcR5RObVTrI2v48i+5KSLLQop39rVZeugqwnjUUQxcwo9nZxtQaomyeI4EJgOhnj6k2SrIVEPeMhmngPFgGwsqQsJ1is8PXsCESpmssA+KwFVKYi+htmyEFHUQWMan+PKp8dM9mJxToAGgKmbstHc9+qUITFdmJAnM0op+ODqeeFWFtZoFHzmBnEqvCF3tCt766PIH6KKCKKq9XxjQV8toQmYQ7Qfer0v2vmMww+4+xwVwG0iteA2w91cLUGLqRzxcE7LvXPxXI6wYQ/Ex+vACjArR++3FaRfizybStLqgfTY7tfvbhZrbSbKkl6J9RCj9XX/joEANy68cXNEOrnxPuPEC0fGkoFrl7cvPd677GI8GEInKcz/PnwMP/3zo/0ei2qtEvUtcsvPJ6+PXzyl3qpX3N2uHs09x88m/6eEiNnxgAAAABJRU5ErkJggg==',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'first-quarter',
    label: 'First Quarter',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAlhJREFUOI11k89rVVcQxz8z59z7fuozWs1LN4kKLuzGf8CChEBpXAgSsJuuSv0TunLjP1EXbTciLkQFF10ZBVeFriuCYEyLIZCCyXt593nvPeeMi5fE5pnOag7M9zPzHeaImTEd85evzmgqb+Bc/9W9HwZedd3V+pSFa9vTtf6/j7NXlvtWVb/6LF8KMWXOFO+EFGpCLKN/9+gX5+It+itb+xrdTy5cWb5kRfEKS9/Wu4MsjoaEcUGqPjDeWCeOdh3YzZj0z2rz4VeHAAvfXJ8bD3b+wLleGA1JdQmi+FYHnMe1OsTxiPHmPxQbf8/bqFhl88HpTxO8f3/fYtUI4+EEK0KjdxLxGeo8zdN9tNEkVSVWV4TB9mw0fxtA5y9fnYmx+hoRZN+RGdO7tZQmS2t3QaDc2viRNw966rwsYiYYYIm8dwpxHpHDgObslzS+mMV1umTHeoRiV2NLFhVkIWsfB1HMjHq0g2u2Qd0hgIji2h3C7hDX6pB1e0jSsx6SifdgkxEtBEIYYiniW93PIM0zcxMr3R4QTUX0LWbIXkdRBYw4HhGrcvpuDkLzHFO35pO5VRXq/PhMZkAqS0Ix2OsoR4rNDFKsfa3PdO35421IvyE68dls4dvH8N0TaJYfDahKDLvLuZUdBdCYbgHr+3twzTYubxwpDsUQEzYybz/B3iG9fvH7loosp7rashCIH4r/9S5Z413ezJeY++7fAwDA62dP/srz1kXx/g6iwVKc1lYIP+c5l+ivvDwAHvWdzy8t9YiNRZLOv7z7vXrPmhvbKudWdqZrPwKYQ/+wmEsYqgAAAABJRU5ErkJggg==',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'waxing-gibbous',
    label: 'Waxing Gibbous',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAApFJREFUOI1tk81rXGUUxn/nvPe+985HOk1szIyoSSu0VahEcFcrlCFFTKlinEURuyp1IboRxIXd9C8ouKgLdVXoQrC0C1emimt1I3VTMQ2S2jqxk2bSSXI/3uMiJpiPszvwPD8OzzlHzIydNX7i9LATm/nk7IuHz595+S9D/nS5fsfEm0s7tdH/m4Mnp5uWZV/GcXLqrVeeXX63fXTEBEKRU5TrZbTwzRfOlRdpdrqbHtmc4PDJ6clsMPgBp433Xz+y9l57PHWVKn7/CKv3F4iqdZInxkCYL5Vp35y5vQWYeG2mVXYfzLkkTWR9EH66fEZ9EpM+2QLnyB4uEtYGSBRjZvjhAw+SWnqMZqerAPR616zMkmK1z7lTz5uPHZXW06hPUBeRjjbRJCVk61ieUSwvjZUWXQLQ8ROnh8syexURBKVz/BlnFrAQtoW12UfVOgisd+9d4I+vG+oiaWMmGIhgR48dQWOPqG4DpGNPkRwYw9XqxEMNisGKlhVpK8hEXN0HokROba17n2hoP+K2LQgRxVVrFCt9XKVGXG8gQSYUgkkUgW2MGPKMrNcl7/2z6z5EdCNYIKo3gICK6F3MEHUURSnqIjAjW+5RDh7vgmyWeo+pm4uCuVkVcr9vODaQvlaolf3/VLKn2SxACHmU6y2d+/76EoSvEEVEufHz3w/9yCjpaAuXVvcGZDkGVznUeaQAWoaLwDwWuHLjV6xSx1Vre5qLQR8TuxdH4WMABbjz47ddFZkOedZdXnk88s6n13vs/rGNIONkwad+itbZxS0AwJ1bN297X3lBXfz5L78vDn302ezdHbeUIVzxnkmand+2gHu983NTUw3KpP3h2y+Nf/DGJKY271ZtlkOdRzu1/wI3uf2bkvvO5gAAAABJRU5ErkJggg==',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'full',
    label: 'Full Moon',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAlNJREFUOI1tk8tuHGUQhb+qv2/T06axE9s9ERcnSySkvIOVVTaRopHgSbLKJi8BC2CDCItIPAFBvERYkgzByNF47PFlLn35/2IxliPbU+s6n0qnzhEz49b883KzbsI3TqXSNJsa8t61+jt7T6Y3V+UaYPyqWp7Mfozz/qN2dh67NEOTlNB1hLb2UVb84Jx/TjUc3wK0By8f+tOLP3Fx6Rcz/GKG6+Ukn26xODwgygvSO7sgjLzyOKmevvkIGP02uJi8fxsXZVpPPqzILiLbGYBzNMdHhOUciWLMjGTz7oe0n31NNRwrwHI++TU0ddqcrC4TUXqDz9AkRV1Etl2haUZoaqxt6M6mu96iF6sLRr9szo4nk1AvRVQJXQdA794XaJxc2bM4/JdQL4nyArOAqIa82NlS77J9814wsBDIL4Wies3tbPce6d1dXL8g3ijp5hfqe7KvImEvvbMDqlgILMeHRJ+UiIuuv0sUl/fpLs5xvT5xUSJB7yumpnEKwQMQ2obm+Ij2ZHIrHiK6MhaIihLwpqb2DgGJoiv3MaM5O8HPZ7dDdjmaJJi6t5Gr3Wuf+jarPo8Butk5zfFlTlTWis0ChNBGrf6h7D2ZEuQnUUVUiTdKkq1tsu0BLsvXA5oWw37mwfBUAZzzz4GRhQBAvFHi8v5acTc/x8T+iyN7BrD6VTUce+Vxt5iNQ1PTnk1hTccAJE4Pkix5xODbo48AIKmevsmK9CtN0+8lirvgu5vaBuG7JOEh1fCvK+DaOv/9qvQ92ZcgXwKY2sgt7DUPhqc3V/8HLU8CsPeOG7IAAAAASUVORK5CYII=',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'waning-gibbous',
    label: 'Waning Gibbous',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAqBJREFUOI1tk0tIlGEUht9zvv82v5cxzZwRSy2CaiXtgpBA3OQmsKBtm1q1jTYuatGmVasUKiLEFkYXiSLGUekCEdJCUAgxmwFDG3Ucx9+Z//J9X4tRY7Szfs9zDud9D2mtcaCyI4f8QF0VTIl7L2ayT9/PFTSM8cXJVxv7pVQFyI0mynnvsenW9IZe0RS2AzItfeP+h+n0dOasMK1HLNXA/Md3uQOAcGmkSxa2piDMuCx5kCUPIubCamhEaXkJQ+lMcXA8Wwcgw0R98xNjswDAAIDMy6S/kvtKhhUP1v9AljyQMGA1NAHCgIi5uHahvc6OtmRQWGuXvp8+2X2xeQ9Q3l57rgLfDvKVzYgYsWQb2LLBwoDTnESsJob+88eFlhEi32tRQtytALIjh6Rf7iYiEFcW0lpBK1V1LK0ULp9rA1sOAEK4tXH9RG9vnKVwerSUBF0Rua3HwKa1B9stp6UVp053It5QC+G4UIHPkHYPE6kOu+kIwAytFMq5ZRj1cZAwqu0ihojVwFQSbFoQjgut0cnQrNm0ASUBACoMEKyvIsyvHYgHMaP+cBMAQNgxkCbNmvUvEEBGZSIJA9AawWYects7AFnbLO3pCFg0hC/S0pahkzhqAkDkFRGs7+SEqao5s1LEdjkCtAaUCrUdTjA6Lm1A0RNiBjHDrIvDamyG05yEcNwqQPp7dseRCIoxvJBKFRgAhJADADK71pl1cQi3pqo5iCSG3sxsy6AMrfHbIuMWsJvExJWcZPRFJS+nAh/h5gaw78duD33O5Iu+K9hYMmyn98fk2Oo/AAAr0T/r1Npn2LYHyTAjJaOKKwrq5oOpT2+/LCZB9NAwzK758ddze878951/jsZljHpIUfudZ982h1OzeQg/vZBKFfZL/wLfAixf5uJDuQAAAABJRU5ErkJggg==',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'last-quarter',
    label: 'Last Quarter',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAlpJREFUOI1tk89LVVEQx78z59wfPrOrifWMykJclBv/AqHkbSwiiKBdO/sTWrnpn6hFtSgwSKho0eZpQqugdVGImYKRXd9Pe3rvufecafF8xtM3qzkw388ZvjNDIoJjsbkwlBp3VzEVJ+deNTPrNgR6aX3lTf1oqe56xYvFpNZ66hX6S2J3PdEhcusAm0Ncasev3njC1s2vfnwfdyTcSbKthakkrn2DyGyys+2ZagxTr0DyDKZRhaSJAui+U+rzxLWbk92Ajdej6Xb8ibQfmeof2P0WSGn4g8MAK7Dnw2UGplmBaVTGbJouT0zPjhwCkr3KS2fSwNTanREx+kbPgf0AxAxvYBDQGpLnEJsjT1tnnFIP24DNhSGbJtNEBOJ2QyIO4lyXPXRgNvshAEL2tz43XipFbFU4I9YSBBDnUDh7Aez5h7BOeAND0P0RlB9AhQU4kzJsMMMEjAXDpwFmiHNI4t/QJyOQ6h4QiKD8ADZNwJ4PFRYggksMAOwFgLMA0DaruoOsVjm+H0RtPwCooA8kJCwsP0EA6faPpDQgAtOswe61jkM6LKVBwLpWqVq2gc3C4nkPAPLWLkz1YE+YeqtFAOcyCbIPjIu36nD0jJgPRhbBPzWCcGQUKiz01rscjvBirVxuMAAoZecBbHRG5w1EUIX+nmJrEojgl8/6AdDZxOKd2DKu5/ut2JkUWbMO9LgxAFCst3QQlr6vvNv5DwDgF29/CU8EVzgIHpP2cmfzI33DgOiR1t7U6tLbr4dm9jznH4uR7aMZcjR2+d5zzp1dh0qX18rlxtHSfxFwERBgI1rqAAAAAElFTkSuQmCC',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
  {
    key: 'waning-crescent',
    label: 'Waning Crescent',
    icon: {
      b64: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAHYAAAB2AH6XKZyAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAohJREFUOI11k09onGUQh5+Z932/79vtrpu0JqaiEEEvhUrordBbKCg9KIon75704kEv9uJdRC8RtF7U9FBoSg5FSNtI8ODNf7QioSZraauum3Rjttnd73vf8VBsmybOcZjfMzM/ZsTM2BO/z4+XkVc+WvjxybnFX7ZN7IbhL60tL9x5tFR2ATrnpgab/TOhfuDkwvK19ruffvssrsBiRUoxupB9pjGdXl252NkDKG/Oz8Te9je40Jq78P3GB/PfHdSQ42sHGG1t4rIc32gBtFXk1OqVxasPAO3zh7e7N9ZCo5Xf7f6Vjr21oGWErNECdVT9LawqwSkYhFrzT+fc0dWVix0FGNztnk2jYT7a7DC/sl6VVSJ/bBzxAVElNMfAe6yqsFhRDftPJOfevzdB+6vx/ka3m4YDEVVeeO9r1v/okbUeR5y7b0+5tUGqSjQrwAyEFMaKgz66YtZiFAxSMru140WcQ2S326E5ThwN7+VFKf/ZVGJrVkXSdH5oElQpY7Ky38MVdVC3myCCy3LicICGDFfUMeMZj6lpyCFFAKyqqKptLCV8rbEHEppjALi8hpiYmto6AuI9QUVEFTDiTp84Gu49sv9YziOwpm7oLiOUxdTT1J+alonJQw81lP3VZhBjaWFwRZl++Q5JPhdVRJXXX5y57etNfGMMDdn++liRlC+vLy31FMC5eBpoW0q88dLzvtZo4rJ8X3EcDTC4lYl/B0ABmHqtE5VT1U6/U0ic+OLt47f/b3en/qbPi5O/Li/+/QAAZFOvXi0a+RHN80+OPnd44uM3T/ysD1tgjBCZ8z7MrF66cO2+T/u+82/nWrEms3OLP01+ePaHGprauOHl60tLvUdL/wVWfBjlGCgg3wAAAABJRU5ErkJggg==',
    },
    audio: {
      url: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3',
    },
  },
];
