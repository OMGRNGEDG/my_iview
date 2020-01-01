<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" width="auto" @on-select="handleSelect">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
        </template>
        <template v-else></template>
      </template>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      openedNames: []
    };
  },
  methods: {
    handleSelect(name) {
      this.$emit("on-select", name);
    }
  }
};
</script>
<style lang="less" scoped>
.side-menu-wrapper {
  user-select: none;
  .menu-collapsed {
    padding-top: 10px;

    .ivu-dropdown {
      width: 100%;
      .ivu-dropdown-rel a {
        width: 100%;
      }
    }
    .ivu-tooltip {
      width: 100%;
      .ivu-tooltip-rel {
        width: 100%;
      }
      .ivu-tooltip-popper .ivu-tooltip-content {
        .ivu-tooltip-arrow {
          border-right-color: #fff;
        }
        .ivu-tooltip-inner {
          background: #fff;
          color: #495060;
        }
      }
    }
  }
  a.drop-menu-a {
    display: inline-block;
    padding: 6px 15px;
    width: 100%;
    text-align: center;
    color: #495060;
  }
}
.menu-title {
  padding-left: 6px;
}
</style>
