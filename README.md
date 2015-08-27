# CrashReport-BackEnd-Prototype
CrashReport for nodejs Prototype

### User API

"POST" /users/login => 로그인
  Content-Type: application/json
  req.body : {
    "email" : "email,
    "password" : "password""
  }
  
"POST" /users => 회원가입 
  Content-Type: application/json
  req.body : {
    "email" : "email,
    "password" : "password""
  }
  
### Project API  
  
"POST" /projects => 프로젝트 생성
  Content-Type: application/json
  id: userId 
  
  req.body: {
    "name" : "project name",
    "appVersion" : "app version"
  }
  
"GET" /projects/:project_id => 프로젝트 가져오기
  req.params.project_id = 프로젝트 id
  
### Error API

"GET" /errors/:project_id = > 수집된 에러 가져오기
  req.params.project_id = 프로젝트 id

