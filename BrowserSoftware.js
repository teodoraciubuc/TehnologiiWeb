class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}
class Plugin {
  constructor(description) {
    this.description = description;
  }

  install() {
    console.log(`Plugin "${this.description}" installed`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(plugin) {
    this.plugins.push(plugin);
    console.log(`Plugin "${plugin.description}" added to ${this.name}`);
  }

  installPlugins() {
    console.log(`Installing all plugins for ${this.name}...`);
    this.plugins.forEach((plugin) => plugin.install());
  }
}

const chrome = new Browser("Google Chrome");
chrome.run();

const plugin1 = new Plugin("AdBlock");
const plugin2 = new Plugin("Dark Mode");

chrome.addPlugin(plugin1);
chrome.addPlugin(plugin2);

chrome.installPlugins();
