import { Component, OnInit } from '@angular/core';
import { AppuserModel } from 'src/models/auth/AppUser.mode';
import { ReturnObject } from 'src/models/returnObj.model';
import { Router } from '@angular/router';
import { JwtManager } from 'src/services/authentication/jwt-manager.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/services/authentication/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userToRegister: AppuserModel;
  user: AppuserModel;
  loginResponse: ReturnObject;
  myStyle: object = {};
  myParams: object = {};
  isInLogin = true;

  constructor(private router: Router, private http: HttpClient, private jwtManager: JwtManager, private api: ApiService) {
    this.user = new AppuserModel();
    this.userToRegister = new AppuserModel();
  }

  async login() {
    const res:ReturnObject = await this.api.post('/api/auth/login', this.user, true);
    if (res.success) {
      this.loginResponse = res;
      this.jwtManager.setJwt(this.loginResponse.data);
      this.router.navigateByUrl('/project');
    } else {
      this.loginResponse = new ReturnObject();
      this.loginResponse.success = false;
      this.loginResponse.message = 'ERR_LOGIN_NOCREDS';
    }

    // this.http.post<ReturnObject>('/api/auth/login', this.user)
    //   .subscribe(
    //     (res) => {
    //       this.loginResponse = res;
    //       if (this.loginResponse.success === true) {
    //         this.jwtManager.setJwt(this.loginResponse.data);
    //         this.router.navigateByUrl('/project');
    //       }
    //     },
    //     (err) => {
    //       this.loginResponse = new ReturnObject();
    //       this.loginResponse.success = false;
    //       this.loginResponse.message = 'ERR_LOGIN_NOCREDS';
    //     }
    //   );
  }

  register() {
    this.http.post<ReturnObject>('/api/auth', this.userToRegister)
      .subscribe(
        (res) => {
          if (res.success) {
            this.user.Username = this.userToRegister.Username;
            this.user.Password = this.userToRegister.Password;
            this.userToRegister = new AppuserModel();
          } else {
            this.loginResponse = res;
          }
        }
      );
  }

  toggleRegisterLogin() {
    this.isInLogin = !this.isInLogin;
  }

  ngOnInit() {
    if (this.jwtManager.getUser()) {
      this.router.navigate(['/project']);
    }
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1

    };

    this.myParams = {
      'particles': {
        'number': {
          'value': 80,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#212529'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          }
        },
        'opacity': {
          'value': 0.3,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 0.3,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#212529',
          'opacity': 0.2,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 191.80819180819182,
            'line_linked': {
              'opacity': 0.5
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 1,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true
    };
  }

}
