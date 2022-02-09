import { Component, OnInit } from '@angular/core';
import {Skills} from "../../interfaces/skills";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Array<Skills> = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      { title: "Git", thumb: "http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png", description: "Je suis capable d'administrer et d'utiliser un dépôt Git. Au niveau des des services clouds, j'ai déjà manipulé Github, Gitlab et Bitbucket." },
      { title: "SonarQube", thumb: "https://user-images.githubusercontent.com/15386828/118396592-e331c880-b658-11eb-8fdc-7426520c691f.png", description: "Dans le but d'améliorer la qualité de code, j'utilise parfois l'outils de mesure de qualité de code SonarQube" },
      { title: "Visual Studio Code", thumb: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg", description: "Éditeur de code extensible" },
      { title: "Visual Studio 2019", thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/langfr-800px-Visual_Studio_Icon_2019.svg.png", description: "IDE complet pour le développeurs C#, C++ et .NET sur Windows" },
      { title: "Unity Open Projects", thumb: "http://assets.stickpng.com/images/58482b92cef1014c0b5e4a2d.png", description: "efozerghfoeghiuertghijerghrghtghbnrhjrthnrnthornhorohrhjorhorthjorthjiorjhtorjhojrthjrohjor" },
      { title: "PHPStorm", thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/PhpStorm_Icon.svg/langfr-800px-PhpStorm_Icon.svg.png", description: "efozerghfoeghiuertghijerghrghtghbnrhjrthnrnthornhorohrhjorhorthjorthjiorjhtorjhojrthjrohjor" },
      { title: "Android Studio", thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Android_Studio_Icon_%282014-2019%29.svg/512px-Android_Studio_Icon_%282014-2019%29.svg.png", description: "efozerghfoeghiuertghijerghrghtghbnrhjrthnrnthornhorohrhjorhorthjorthjiorjhtorjhojrthjrohjor" },
      { title: "Docker", thumb: "https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png", description: "efozerghfoeghiuertghijerghrghtghbnrhjrthnrnthornhorohrhjorhorthjorthjiorjhtorjhojrthjrohjor" },
      { title: "MySQL", thumb: "https://www.alouit-multimedia.com/wp-content/uploads/2012/08/mysql-logo_2800x2800_pixels1.png", description: "Je suis capable d'installer et de configurer une base de données MySQL sur un environnement Windows et Linux" },
      { title: "Redis", thumb: "https://cdn.icon-icons.com/icons2/2415/PNG/512/redis_original_wordmark_logo_icon_146369.png", description: "Je possède des notions de base sur l'utilisation d'une base de données Redis." },
      { title: "Apache", thumb: "https://usuploads.s3.amazonaws.com/itlearn360/uploads/2018/01/Apache-HTTP-Server-logo-min.png", description: "Je possède des notions sur l'installation et la configuration d'un serveur Apache sur un environnement Linux et Windows." },
      { title: "Camtasia Studio", thumb: "https://pic.clubic.com/v1/images/1499171/raw", description: "J'utilise ce logiciel dans le cadre d'un de mes centres d'intérêts qui est le montage." },
    ];
  }

}
