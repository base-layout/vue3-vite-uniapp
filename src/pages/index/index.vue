<template>
	<view class="content">
		<uni-badge :text="count" />
		<uni-list>
			<uni-list-item v-for="item in listData" :title="item.bookName"></uni-list-item>
		</uni-list>
	</view>
</template>

<script setup lang="ts">
	import {
		ref
	} from "vue";
	import {
		fetchUserList
	} from "@/api/user";
	import type {
		IUserInfo
	} from "@/api/type";

	const listData = ref < IUserInfo[] > ([])
	const count = ref < number > (0)

	getList();
	async function getList() {
		const {
			data
		} = await fetchUserList({
			currentPage: 1,
			pageSize: 2,
		})
		const {
			records,
			total
		} = data
		listData.value = records
		count.value = total

	}
</script>

<style>
	.content {}
</style>
