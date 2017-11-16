const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {

    // POLITICO STYLES 
    this.fs.copy(
      this.templatePath('src/scss/_ads.scss'),
      this.destinationPath('src/scss/_ads.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_bootstrap.scss'),
      this.destinationPath('src/scss/_bootstrap.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_breakpoints.scss'),
      this.destinationPath('src/scss/_breakpoints.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_buttons.scss'),
      this.destinationPath('src/scss/_buttons.scss'));
    this.fs.copy(
      this.templatePath('src/scss/colors/_base.scss'),
      this.destinationPath('src/scss/colors/_base.scss'));
    this.fs.copy(
      this.templatePath('src/scss/colors/_diverging.scss'),
      this.destinationPath('src/scss/colors/_diverging.scss'));
    this.fs.copy(
      this.templatePath('src/scss/colors/_qualitative.scss'),
      this.destinationPath('src/scss/colors/_qualitative.scss'));
    this.fs.copy(
      this.templatePath('src/scss/colors/_sequential.scss'),
      this.destinationPath('src/scss/colors/_sequential.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_comments.scss'),
      this.destinationPath('src/scss/_comments.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_credits.scss'),
      this.destinationPath('src/scss/_credits.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_elements.scss'),
      this.destinationPath('src/scss/_elements.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_refer.scss'),
      this.destinationPath('src/scss/_refer.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_fonts.scss'),
      this.destinationPath('src/scss/_fonts.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_footer.scss'),
      this.destinationPath('src/scss/_footer.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_graphics.scss'),
      this.destinationPath('src/scss/_graphics.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_header.scss'),
      this.destinationPath('src/scss/_header.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_icons.scss'),
      this.destinationPath('src/scss/_icons.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_mixins.scss'),
      this.destinationPath('src/scss/_mixins.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_navigation.scss'),
      this.destinationPath('src/scss/_navigation.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_photos.scss'),
      this.destinationPath('src/scss/_photos.scss'));
    this.fs.copy(
      this.templatePath('src/scss/_share.scss'),
      this.destinationPath('src/scss/_share.scss'));
    this.fs.copy(
      this.templatePath('src/scss/main.scss'),
      this.destinationPath('src/scss/main.scss'));

// NBN STYLES
    //layout:
    this.fs.copy(
      this.templatePath('src/scss/layout/_banner.scss'),
      this.destinationPath('src/scss/layout/_banner.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/layout/_footer.scss'),
      this.destinationPath('src/scss/layout/_footer.scss'));  
    this.fs.copy(
      this.templatePath('src/scss/layout/_images.scss'),
      this.destinationPath('src/scss/layout/_images.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/layout/_layout.scss'),
      this.destinationPath('src/scss/layout/_layout.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/layout/_masthead.scss'),
      this.destinationPath('src/scss/layout/_masthead.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/layout/_prose.scss'),
      this.destinationPath('src/scss/layout/_prose.scss'));  
    this.fs.copy(
      this.templatePath('src/scss/layout/_quotes.scss'),
      this.destinationPath('src/scss/layout/_quotes.scss')); 
    // helpers:
    this.fs.copy(
      this.templatePath('src/scss/helpers/_colors.scss'),
      this.destinationPath('src/scss/helpers/_colors.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/helpers/_functions.scss'),
      this.destinationPath('src/scss/helpers/_functions.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/helpers/_mixins.scss'),
      this.destinationPath('src/scss/helpers/_mixins.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/helpers/_placeholders.scss'),
      this.destinationPath('src/scss/helpers/_placeholders.scss')); 
    this.fs.copy(
      this.templatePath('src/scss/helpers/_variables.scss'),
      this.destinationPath('src/scss/helpers/_variables.scss')); 
    //theme:
    this.fs.copy(
      this.templatePath('src/scss/theme/_theme.scss'),
      this.destinationPath('src/scss/theme/_theme.scss')); 


  }
  install() {
    const dependencies = [
      'bootstrap-sass',
    ];
    this.yarnInstall(dependencies, { save: true });
  }
};
