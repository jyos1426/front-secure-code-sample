<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.fora.si/uploads/perception/images/benefits/secure_2.png" alt="Project logo"></a>
</p>

<h3 align="center">Secure coding</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/jyos1426/secure_code/issues)

</div>

<p align="center"> 시큐어 코딩에 대한 기술조사 및 샘플링
    <br> 
</p>

# 📝 Table of Contents

* [1. 시큐어 코딩에 대한 기술조사](#search)
* [2. 프로젝트 반영 기술 선정](#selected)
* [3. 시큐어 코딩 샘플링](#sampling)
* [4. 참고 문헌](#refer)
<br><br>

# 🧐 시큐어 코딩에 대한 기술조사 <a name = "search"></a>

## 1. Angular Security Best Practices ([Angular-Security-Best-Practices.pdf](https://snyk.io/wp-content/uploads/Angular-Security-Best-Practices-1.pdf))
<br>

- The “Angular way” safeguards you from XSS
<br> Interpolation({{ })을 사용하여 잠재적으로 위험한 문자를 안전하게 인코딩하고 템플릿 식 내에서 신뢰할 수 없는 HTML 또는 CSS 식을 escape

- Use innerHTML with caution
<br> HTML을 구성요소에 동적으로 추가해야 하는 경우 [innerHTML] 위치에 생성 바인딩

- Never use templates generated by concatenating user input
<br> 사용자 입력을 연결하여 생성한 템플릿을 사용하지 말 것
```
const potentialUserInput = `
  <!-- 잠재적 사용자 입력 -->
  <img src="x" onError="javascript:console.log({cookie: window.document.cookie});">
`;

@Components({
  template: `
  <div class="job">
    {{data.body}}
  <div>
  ` + potentialUserInput
})
export class TestComponent  {
  @Input() data: any;
}
```
이러한 취약성 방지하기 위해 After of Time 컴파일러를 사용하여 오프라인으로 템플릿을 컴파일할 것을 권장
```
ng build --aot
ng serve --aot
```

- Never use native DOM APIs to interact with HTML elements
<br> - 일반적으로 피해야할 사항
<br> 1. node.appendChild(); 사용
<br> 2. page와 상호작용 하기위한 document 객체 메소스 사용
<br> 3. jquery API 사용

- Avoid template engines on server-side templates
<br> Angular server rendering application에 3rd party template engine사용을 피함


- Scan your Angular project for components which introduce security vulnerabilities
<br> npm audit 또는 snyk를 사용하여 Angular 프로젝트 오픈 소스 종속성 및 Angular 구성 요소에서 보안 취약점을 검색
<br> [Snyk](#synk) 플랫폼 또는 CLI를 무료로 사용하여 보안 취약점을 찾아 수정하고 모니터링

## 2. [Angular.io](https://angular.io/guide/security)

- 

<br>

---
<br>

# 🔧 프로젝트 반영 기술 선정 <a name = "selected"></a>

## 1. snyk - [https://snyk.io](https://snyk.io/) <a name = "snyk"></a>
프로젝트의 의존성을 검사해서 사용되는 라이브러리(npm packages)의 취약점을 확인하는 보안 도구, tool chain에 연동하여 commit 이나 build, CI/CD 시 자동 모니터링 가능, container image 도 검사가능
```
npm install -g snyk
snyk test
```
- 검사 결과 예시
```
[root@localhost secure_code]# snyk test

Testing /workspace/secure_code...

Organization:      jyos1426
Package manager:   npm
Target file:       package-lock.json
Project name:      secure-coding
Open source:       no
Project path:      /workspace/secure_code
Licenses:          enabled

✓ Tested 12 dependencies for known issues, no vulnerable paths found.
```

## 2. 
# 🏁 샘플링 <a name = "sampling"></a>

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```


# 🔧 4. 참고 문헌 <a name = "refer"></a>

- [lesstif](https://www.lesstif.com/security/owasp-2020-10-91291830.html#OWASP202010%EB%8C%80%EC%B7%A8%EC%95%BD%EC%A0%90-A1.Injection(%EC%9D%B8%EC%A0%9D%EC%85%98)) - OWASP 2020 10대 취약점
- [kisa](https://www.kisa.or.kr/public/laws/laws3_View.jsp?cPage=6&mode=view&p_No=259&b_No=259&d_No=52&ST=T&SV=) - 기술안내서 가이드