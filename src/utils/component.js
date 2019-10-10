module.exports = {
    formatCfg: function (configs) {
        configs.columns = [];
        for (let rowIndex = 0; rowIndex < configs.items.length; rowIndex++) {
            let rowItems = configs.items[rowIndex];
            for (let colIndex = 0; colIndex < rowItems.length; colIndex++) {
                let item = rowItems[colIndex];
                if (!item.id) continue;
                if (item["type"] == "hidden" || item["hide"] == true) continue;
                configs.columns.push({
                    "title": item.label,
                    "dataIndex": item.id,
                    "sorter": item.sorter,
                    "width": item.width,
                    "render": item.render,
                    "filters": item.filters || []
                });
            }
        }
        configs.items.push([{
            id: "id",
            type: "hidden",
            decorator: {}
        }])
        return configs;
    },

    getCls: function (maxColCount, colspan) {
        var _label, _field;
        switch (maxColCount) {
            case 1:
                _label = {
                    xs: {
                        span: 20,
                        push: 2
                    },
                    sm: {
                        span: 6
                    },
                    md: {
                        span: 8
                    },
                    lg: {
                        span: 6
                    },
                    xl: {
                        span: 6
                    },
                    xxl: {
                        span: 6
                    }
                }
                _field = {
                    xs: {
                        span: 20,
                        push: 2
                    },
                    sm: {
                        span: 16
                    },
                    md: {
                        span: 12
                    },
                    lg: {
                        span: 10
                    },
                    xl: {
                        span: 10
                    },
                    xxl: {
                        span: 10
                    }
                }
                break;
            case 2:
                if (colspan == 2) {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 4
                        },
                        xl: {
                            span: 4
                        },
                        xxl: {
                            span: 4
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 20
                        },
                        md: {
                            span: 20
                        },
                        lg: {
                            span: 20
                        },
                        xl: {
                            span: 16
                        },
                        xxl: {
                            span: 16
                        }
                    }
                } else {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 4
                        },
                        xl: {
                            span: 4
                        },
                        xxl: {
                            span: 4
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 8
                        },
                        md: {
                            span: 8
                        },
                        lg: {
                            span: 8
                        },
                        xl: {
                            span: 6
                        },
                        xxl: {
                            span: 6
                        }
                    }
                }
                break;
            case 3:
                if (colspan == 3) {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 20
                        },
                        md: {
                            span: 20
                        },
                        lg: {
                            span: 22
                        },
                        xl: {
                            span: 22
                        },
                        xxl: {
                            span: 22
                        }
                    }
                } else if (colspan == 2) {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 20
                        },
                        md: {
                            span: 20
                        },
                        lg: {
                            span: 14
                        },
                        xl: {
                            span: 14
                        },
                        xxl: {
                            span: 14
                        }
                    }
                } else {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 8
                        },
                        md: {
                            span: 8
                        },
                        lg: {
                            span: 6
                        },
                        xl: {
                            span: 6
                        },
                        xxl: {
                            span: 6
                        }
                    }
                }
                break;
            case 4:
                if (colspan == 4) {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 20
                        },
                        md: {
                            span: 20
                        },
                        lg: {
                            span: 22
                        },
                        xl: {
                            span: 22
                        },
                        xxl: {
                            span: 22
                        }
                    }
                } else if (colspan == 3) {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 20
                        },
                        md: {
                            span: 20
                        },
                        lg: {
                            span: 22
                        },
                        xl: {
                            span: 16
                        },
                        xxl: {
                            span: 16
                        }
                    }
                } else if (colspan == 2) {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 20
                        },
                        md: {
                            span: 20
                        },
                        lg: {
                            span: 10
                        },
                        xl: {
                            span: 10
                        },
                        xxl: {
                            span: 10
                        }
                    }
                } else {
                    _label = {
                        xs: {
                            span: 6
                        },
                        sm: {
                            span: 4
                        },
                        md: {
                            span: 4
                        },
                        lg: {
                            span: 2
                        },
                        xl: {
                            span: 2
                        },
                        xxl: {
                            span: 2
                        }
                    }
                    _field = {
                        xs: {
                            span: 16
                        },
                        sm: {
                            span: 8
                        },
                        md: {
                            span: 8
                        },
                        lg: {
                            span: 6
                        },
                        xl: {
                            span: 4
                        },
                        xxl: {
                            span: 4
                        }
                    }
                }
                break;
            default:
                break;
        }
        return [_label, _field];
    },
}